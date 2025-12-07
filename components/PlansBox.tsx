import Link from "next/link";
import { Button } from "./ui/button";
import { Url } from "url";

export interface PlansBoxProps {
  title?: string;
  subtitle?: string;
  price?: string | number;
  buttonText?: string;
  buttonHref?: Url | string | undefined;
  included?: string[];
}

export default function PlansBox({
  title,
  subtitle,
  price,
  buttonText,
  buttonHref = "/",
  included = [],
}: PlansBoxProps) {
  return (
    <article className="p-6 rounded-2xl border border-border bg-card shadow-md hover:shadow-lg transition-shadow">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <div className="border-t border-border pt-4">
        <h2 className="text-3xl font-bold text-foreground">
          ₹ {price}
          <span className="text-lg font-normal text-muted-foreground">
            {" "}
            / month
          </span>
        </h2>
      </div>

      <Button asChild variant="outline">
        <Link href={buttonHref}>{buttonText}</Link>
      </Button>

      <div className="mt-1 border-t border-border pt-4">
        <p className="text-sm font-semibold text-foreground mb-3">
          Included in this plan
        </p>
        <ul className="space-y-2">
          {included.map((item, idx) => (
            <li
              key={idx}
              className="text-sm text-muted-foreground flex items-center"
            >
              <span className="mr-2">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
