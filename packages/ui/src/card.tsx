<<<<<<< HEAD
export function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
=======
import {type ReactNode} from "react";

export function Card({
                         title,
                         children,
                         href,
                     }: {
    title: string;
    children: ReactNode;
    href: string;
}): JSX.Element {
    return (
        <a
            className="ui-group ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors hover:ui-border-neutral-700 hover:ui-bg-neutral-800/30"
            href={`${href}?utm_source=create-turbo&utm_medium=with-tailwind&utm_campaign=create-turbo"`}
            rel="noopener noreferrer"
            target="_blank"
        >
            <h2 className="ui-mb-3 ui-text-2xl ui-font-semibold">
                {title}{" "}
                <span
                    className="ui-inline-block ui-transition-transform group-hover:ui-translate-x-1 motion-reduce:ui-transform-none">
          -&gt;
        </span>
            </h2>
            <p className="ui-m-0 ui-max-w-[30ch] ui-text-sm ui-opacity-50">
                {children}
            </p>
            <p className={"bg-amber-600 h-1"}>asdasdasd</p>
        </a>
    );
}
>>>>>>> 9712037 (repository pull)
