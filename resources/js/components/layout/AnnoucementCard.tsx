interface AnnouncementCardProps {
  date: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  linkText?: string;
  featured?: boolean;
}

export default function AnnouncementCard({
  date,
  title,
  description,
  link,
  tags,
  linkText,
  featured,
}: AnnouncementCardProps) {
  return (
    <div className="border border-primary/50 hover:border-primary rounded-lg p-8 text-left max-w-xs mx-auto flex flex-col gap-4 bg-white relative">
      {featured && (
        <span className="absolute right-0 top-0 py-2 px-3 bg-primary text-white uppercase font-light text-xs rounded-tr-md rounded-bl-lg">
          featured
        </span>
      )}
      <div className="flex flex-col gap-2 mb-4">
        <p className="uppercase text-primary">{date}</p>
        <h3 className="text-primary font-medium md:text-md text-prime">{title}</h3>
        <p className="text-gray-700 font-light text-sm leading-relaxed mt-2">{description}</p>
      </div>
      <div className="flex flex-col gap-4 mt-auto">
        <a className="text-primary font-medium" href={link}>
          {linkText}
        </a>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-primary text-xs py-1 px-4 bg-accent/50 w-fit rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
