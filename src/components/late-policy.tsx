import { Clock } from "lucide-react";

// Lateness rule confirmed by the company: a client who is 15+ minutes late for a booking loses the
// slot. Shown on every service page (`/services/$slug`, `/trucks`, `/moto`, `/metal-workshop`,
// `/sprinter-tuning`) — change the wording here, not in the pages.
export function LatePolicy({ className = "" }: { className?: string }) {
  return (
    <div
      role="note"
      className={`flex gap-4 rounded-lg border border-primary/40 bg-primary/5 p-5 sm:p-6 ${className}`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary text-primary-foreground">
        <Clock className="h-5 w-5" />
      </div>
      <div>
        <p className="font-semibold">Приезжайте вовремя</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          При опоздании на <span className="font-semibold text-foreground">15 минут и более</span>{" "}
          запись отменяется — услугу в назначенное время оказать не получится. Если понимаете, что
          задерживаетесь, заранее напишите нам в WhatsApp.
        </p>
      </div>
    </div>
  );
}
