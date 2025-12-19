import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

interface CardProps {
  url?: string;
  title?: string;
  description?: string;
  date?: string;
  readtime?: string;
  tags?: Array<string>;
}

export default function BlogCard({
  url = "/url",
  title = "title",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique.",
  date = "5 Jan, 2000",
  readtime = "8 min read",
  tags = ["tag 1", "tag 2", "tag 3"],
}: CardProps) {
  return (
    <Link
      href={url}
      className="ring-border hover:ring-brand/60 animation group hover:bg-brand/8 animation p-6 ring-1 select-none"
    >
      <div className="flex justify-between gap-6">
        <h3 className="group-hover:text-brand text-xl font-bold tracking-wider opacity-80 group-hover:opacity-100">
          {title}
        </h3>
        <ArrowUpRight className="animation group-active:stroke-brand scale-0 opacity-80 group-hover:scale-100 group-active:opacity-100" />
      </div>
      <div className="relative h-8 w-full overflow-hidden">
        <div className="animation absolute inset-0 flex items-center gap-6 opacity-60 group-hover:-translate-y-full group-hover:opacity-0">
          <div className="flex items-center gap-2">
            <CalendarDays className="size-4 stroke-1" />
            <time dateTime={date} className="text-sm">
              {date}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 stroke-1" />
            <p className="text-sm">{readtime}</p>
          </div>
        </div>
        <div className="animation absolute inset-0 flex translate-y-full items-center gap-2 opacity-80 group-hover:translate-y-0">
          {tags.map((tag, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="border-brand/60 hover:border-ring"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <p className="paragraph-short line-clamp-3 pt-3 opacity-60 group-hover:opacity-80">
        {description}
      </p>
    </Link>
  );
}
