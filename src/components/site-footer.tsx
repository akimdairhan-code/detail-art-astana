import { Link } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { GOALS, reachGoal } from "@/lib/analytics";
import {
  ADDRESS,
  HOURS,
  LEGAL_ENTITY,
  PHONE,
  PHONE_HREF,
  SOCIAL_LINKS,
  WHATSAPP,
} from "@/lib/business-info";

// Public site footer, rendered once for every page by the root layout (`src/routes/__root.tsx`),
// like the header. Section links use absolute `/#...` hashes so they work from any page.
const nav = [
  ["Услуги", "/#services"],
  ["До/после", "/#gallery"],
  ["Отзывы", "/#reviews"],
  ["Контакты", "/#contacts"],
  ["Запись", "/#booking"],
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-graphite/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl tracking-widest">
            APELSIN<span className="text-primary">.</span>DETAILING
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Детейлинг легковых авто, грузовых фур и мотоциклов в Apelsin Industrial Park.
          </p>
        </div>

        <nav aria-label="Разделы сайта">
          <p className="eyebrow">Разделы</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="hover:text-primary">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Контакты</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{ADDRESS}</span>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{HOURS}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a
                href={PHONE_HREF}
                onClick={() => reachGoal(GOALS.phoneClick)}
                className="hover:text-primary"
              >
                {PHONE}
              </a>
            </li>
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a
                href={WHATSAPP}
                onClick={() => reachGoal(GOALS.whatsappClick)}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                WhatsApp
              </a>
            </li>
          </ul>
          {SOCIAL_LINKS.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {LEGAL_ENTITY || "Apelsin Industrial Park"}. Все права
            защищены.
          </p>
          <Link to="/privacy" className="hover:text-primary">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
