import { cn } from "@/lib/utils"
import Image from "next/image"
import { PropsWithChildren } from "react"

interface InfoProps {
	hideIcon?: boolean
	iconAlignment?: "left" | "right"
	textClassName?: string
}

const InfoIcon = () => {
	return (
	<div className="flex h-7.5 w-7.5 flex-shrink-0 items-center justify-center rounded-full border border-solid border-[#F9F8F725]">
		<Image
			src={"/assets/icons/info.svg"}
			alt="Info"
			width={15}
			height={15}
		/>
	</div>
	)
}

export const Info = ({hideIcon, iconAlignment: _iconAlignment, textClassName, children}: PropsWithChildren<InfoProps>) => {
	const iconAlignment = _iconAlignment ?? "left"
	return (
		<div className="flex items-center gap-2 opacity-70">
			{!hideIcon && iconAlignment === "left" && <InfoIcon />}
			{/** Since whitespace-nowrap would squash the info icon, I've manually set the tracking to be the maximum amount possible to fill the parent
			 * @fabryscript
			 */}
			<span className={cn("tracking-[0.28px] text-neutral-100 sm:tracking-[0.5px]", textClassName)}>
				{children}
			</span>
			{!hideIcon && iconAlignment === "right" && <InfoIcon />}
		</div>
	)
}