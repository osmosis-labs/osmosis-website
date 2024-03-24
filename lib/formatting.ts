import {
  PricePretty,
  CoinPretty,
  RatePretty,
  Dec,
  IntPretty,
  DecUtils,
} from "@keplr-wallet/unit";

export function isNumeric(value: any) {
  return value != null && value - parseFloat(value) + 1 >= 0;
}

export function getNumberMagnitude(val: string | number) {
  if (!isNumeric(val)) return 0;
  return Number(Number(val).toExponential().split("e")[1]);
}

export function toScientificNotation(
  val: string | number,
  maxDecimals?: number,
) {
  if (!isNumeric(val)) return "0";
  const numberAsExponential = Number(val).toExponential(maxDecimals);
  const magnitude = getNumberMagnitude(val);
  return magnitude === 0
    ? numberAsExponential.split("e")[0]
    : `${numberAsExponential.split("e")[0]}*10^${magnitude}`;
}

type CustomFormatOpts = {
  maxDecimals: number;
  scientificMagnitudeThreshold: number;
};

type FormatOptions = Partial<Intl.NumberFormatOptions & CustomFormatOpts>;

type FormatOptionsWithDefaults = Partial<Intl.NumberFormatOptions> &
  CustomFormatOpts;

const DEFAULT: CustomFormatOpts = {
  maxDecimals: 2,
  scientificMagnitudeThreshold: 14,
};

/** Formats a pretty object as compact by default. i.e. $7.53M or $265K, or 2K%. Validate handled by pretty object. */
export function formatPretty(
  prettyValue: PricePretty | CoinPretty | RatePretty | Dec | { toDec(): Dec },
  opts: FormatOptions = {},
) {
  const optsWithDefaults: FormatOptionsWithDefaults = {
    ...{ ...DEFAULT },
    ...opts,
  };

  if (
    Math.abs(getNumberMagnitude(prettyValue.toString())) >=
    optsWithDefaults.scientificMagnitudeThreshold
  ) {
    return toScientificNotation(
      prettyValue.toString(),
      optsWithDefaults.maxDecimals,
    );
  }

  if (prettyValue instanceof PricePretty) {
    return priceFormatter(prettyValue, optsWithDefaults);
  } else if (prettyValue instanceof CoinPretty) {
    return coinFormatter(prettyValue, optsWithDefaults);
  } else if (prettyValue instanceof RatePretty) {
    return rateFormatter(prettyValue, optsWithDefaults);
  } else if (prettyValue instanceof Dec || "toDec" in prettyValue) {
    return decFormatter(
      prettyValue instanceof Dec ? prettyValue : prettyValue.toDec(),
      optsWithDefaults,
    );
  } else {
    throw new Error("Unknown pretty value");
  }
}

/** Formats a dec as compact by default. i.e. $7.53M or $265K. Validate handled by `Dec`. */
function decFormatter(
  dec: Dec,
  opts: FormatOptionsWithDefaults = DEFAULT,
): string {
  const options: Intl.NumberFormatOptions = {
    maximumSignificantDigits: 3,
    notation: "compact",
    compactDisplay: "short",
    ...opts,
  };
  const numStr = new IntPretty(dec)
    .maxDecimals(opts.maxDecimals)
    .locale(false)
    .toString();
  let num = Number(numStr);
  num = isNaN(num) ? 0 : num;
  if (hasIntlFormatOptions(opts)) {
    const formatter = new Intl.NumberFormat("en-US", options);
    return trimZerosFromEnd(formatter.format(num));
  } else {
    return trimZerosFromEnd(
      new IntPretty(dec)
        .maxDecimals(opts.maxDecimals)
        .locale(false)
        .shrink(true)
        .toString(),
    );
  }
}

/** Formats a price as compact by default. i.e. $7.53M or $265K. Validate handled by `PricePretty`. */
function priceFormatter(
  price: PricePretty,
  opts: FormatOptionsWithDefaults = DEFAULT,
): string {
  const options: Intl.NumberFormatOptions = {
    maximumSignificantDigits: 3,
    notation: "compact",
    compactDisplay: "short",
    style: "currency",
    currency: price.fiatCurrency.currency,
    ...opts,
  };
  let num = Number(
    new IntPretty(price).maxDecimals(opts.maxDecimals).locale(false).toString(),
  );
  num = isNaN(num) ? 0 : num;
  const formatter = new Intl.NumberFormat(price.fiatCurrency.locale, options);
  return formatter.format(num);
}

/** Formats a coin as compact by default. i.e. 7.53 ATOM or 265 OSMO. Validate handled by `CoinPretty`. */
function coinFormatter(
  coin: CoinPretty,
  opts: FormatOptionsWithDefaults = DEFAULT,
): string {
  const { ...formatOpts } = opts || {};
  const options: Intl.NumberFormatOptions = {
    maximumSignificantDigits: 3,
    notation: "compact",
    compactDisplay: "short",
    style: "decimal",
    ...formatOpts,
  };

  if (hasIntlFormatOptions(opts)) {
    let num = Number(
      new IntPretty(coin)
        .maxDecimals(opts.maxDecimals)
        .locale(false)
        .toString(),
    );
    num = isNaN(num) ? 0 : num;
    const formatter = new Intl.NumberFormat("en-US", options);
    return [formatter.format(num), coin.currency.coinDenom.toUpperCase()].join(
      " ",
    );
  } else {
    if (coin.toDec().isZero()) return coin.trim(true).shrink(true).toString();
    try {
      const baseAmount = new Dec(coin.toCoin().amount);
      let balanceMaxDecimals = opts.maxDecimals;
      while (
        baseAmount.lt(
          DecUtils.getTenExponentN(
            coin.currency.coinDecimals - balanceMaxDecimals,
          ),
        )
      )
        balanceMaxDecimals += opts.maxDecimals;

      return coin
        .maxDecimals(balanceMaxDecimals)
        .trim(true)
        .shrink(true)
        .toString();
    } catch (e) {
      return coin
        .maxDecimals(opts.maxDecimals)
        .trim(true)
        .shrink(true)
        .toString();
    }
  }
}

/** Formats a rate as compact by default. i.e. 33%. Validate handled by `RatePretty`. */
function rateFormatter(
  rate: RatePretty,
  opts: FormatOptionsWithDefaults = DEFAULT,
): string {
  const options: Intl.NumberFormatOptions = {
    maximumSignificantDigits: 3,
    notation: "compact",
    compactDisplay: "short",
    style: "decimal",
    ...opts,
  };
  let num = Number(
    new RatePretty(rate)
      .maxDecimals(opts.maxDecimals)
      .locale(false)
      .symbol("")
      .toString(),
  );
  num = isNaN(num) ? 0 : num;
  const formatter = new Intl.NumberFormat("en-US", options);
  return `${formatter.format(num)}${rate.options.symbol}`;
}

/** Copy opts and remove our custom format opts to reveal whether there are `Intl.NumberFormatOptions`. */
function hasIntlFormatOptions(opts: FormatOptions) {
  const copy = { ...opts };
  if ("maxDecimals" in copy) delete copy.maxDecimals;
  if ("scientificMagnitudeThreshold" in copy)
    delete copy.scientificMagnitudeThreshold;
  return Object.keys(copy).length > 0;
}

/** Formats a coin with given decimals depending on if coin amount is greater or less than one.
 *  Ex: `1.23` at 2 decimals or `0.000023` at 6 decimals. Default: above 2, below 6. */
export function formatCoinMaxDecimalsByOne(
  coin?: CoinPretty,
  aboveOneMaxDecimals = 2,
  belowOneMaxDecimals = 6,
) {
  if (!coin) return "";
  return coin.toDec().gt(new Dec(1))
    ? coin.maxDecimals(aboveOneMaxDecimals).trim(true).toString()
    : coin.maxDecimals(belowOneMaxDecimals).trim(true).toString();
}

/** Trims 0s from end iff trailing integers from '.' are not all 0s. */
export function trimZerosFromEnd(str: string) {
  const decimalPointIndex = str.indexOf(".");

  if (decimalPointIndex === -1) {
    // No decimal point in this string, so return original
    return str;
  }

  // Return if all chars after decimal point are 0
  const charsAfterDecimal = str.substring(decimalPointIndex + 1);
  if (!charsAfterDecimal.split("").some((char) => char !== "0")) {
    return str;
  }

  let i = str.length - 1;
  while (i > decimalPointIndex && str.charAt(i) === "0") {
    i--;
  }

  // If we have only . left from the trimming, remove it as well
  if (str.charAt(i) === ".") {
    i--;
  }

  return str.substring(0, i + 1);
}

export const DEFAULT_VS_CURRENCY = {
  currency: "usd",
  symbol: "$",
  maxDecimals: 2,
  locale: "en-US",
};
