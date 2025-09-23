import { cn } from "@/lib/utils";
import { ElementType, ComponentPropsWithoutRef } from "react";

interface StarBorderProps<T extends ElementType> {
  as?: T;
  color?: string;
  speed?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  size = "md",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = (as || "button") as ElementType;
  const defaultColor = color || "hsl(var(--foreground))";
  const paddingClass =
    size === "sm"
      ? "py-2.5 px-4"
      : size === "lg"
      ? "py-5 px-8"
      : "py-4 px-6";

  return (
    <Component
      className={cn("relative flex items-center justify-center py-[1px] overflow-hidden rounded-[20px]", className)}
      {...props}
    >
      <div
        className={cn(
          "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
          "opacity-20 dark:opacity-70"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0",
          "opacity-20 dark:opacity-70"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "relative z-1 flex w-full items-center justify-center text-base rounded-[20px]",
          paddingClass,
          color
            ? "text-white border-transparent"
            : "border text-foreground bg-gradient-to-b from-background/90 to-muted/90 border-border/40 dark:from-background dark:to-muted dark:border-border"
        )}
        style={color ? { backgroundColor: color } : {}}
      >
        {children}
      </div>
    </Component>
  );
}


