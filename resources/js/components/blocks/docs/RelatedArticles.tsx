import { Link } from "@inertiajs/react";

interface RelatedArticle {
  title: string;
  href: string;
}

const relatedArticles: RelatedArticle[] = [
  { title: "How to register for ExamLock?", href: "/docs/help/register" },
  { title: "How to update my profile?", href: "/docs/user-profile/update" },
  { title: "How to change my password?", href: "/docs/user-profile/change-password" },
  { title: "How to reset my password?", href: "/docs/user-profile/reset-password" },
  { title: "How to contact support?", href: "/docs/help/contact-support" },
  { title: "How to use ExamLock?", href: "/docs/examlock/how-to-use" },
  { title: "How to take an exam?", href: "/docs/exams/taking-exam" },
  { title: "How to view my results?", href: "/docs/exams/view-results" },
];

export default function RelatedArticles() {
  return (
    <aside className="xl:w-64 xl:shrink-0 xl:border-l xl:border-gray-200 xl:pl-6">
      <div className="xl:sticky xl:top-24">
        <h3 className="text-base xl:text-sm font-semibold text-gray-900 mb-4">
          Related Articles
        </h3>
        <ul className="space-y-2">
          {relatedArticles.map((article) => (
            <li key={article.href}>
              <Link
                href={article.href}
                className="block text-sm text-gray-600 hover:text-primary transition-colors py-1.5"
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

