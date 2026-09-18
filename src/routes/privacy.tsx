import { createFileRoute, Link } from "@tanstack/react-router";
import { PHONE } from "@/lib/business-info";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Политика конфиденциальности — APELSIN DETAILING" },
      {
        name: "description",
        content:
          "Политика обработки персональных данных APELSIN DETAILING: какие данные собираются через форму заявки и как они используются.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-6">
          <Link to="/" className="font-display text-xl tracking-widest">
            APELSIN<span className="text-primary">.</span>DETAILING
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
            На главную
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16">
        <p className="eyebrow">Документ</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">Политика конфиденциальности</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Действует в отношении данных, которые посетители сайта APELSIN DETAILING указывают в форме
          заявки на детейлинг.
        </p>

        <div className="surface-panel mt-10 space-y-8 rounded-lg p-6 text-sm leading-relaxed text-muted-foreground sm:p-8">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Какие данные собираются</h2>
            <p className="mt-2">
              При отправке формы заявки на сайте мы собираем: имя, номер телефона, марку и модель
              автомобиля (если указаны), выбранную услугу и желаемую дату записи.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Цель обработки</h2>
            <p className="mt-2">
              Данные используются исключительно для оформления и обработки заявки: связи с вами по
              указанному номеру телефона, подтверждения записи и согласования деталей услуги в
              WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              3. Хранение и передача третьим лицам
            </h2>
            <p className="mt-2">
              Данные заявки сохраняются в базе данных сервиса и не передаются третьим лицам, за
              исключением случаев, необходимых для связи с вами (мессенджер WhatsApp) или требований
              законодательства Республики Казахстан.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Согласие и отзыв согласия</h2>
            <p className="mt-2">
              Отправляя форму, вы подтверждаете согласие на обработку указанных данных. Вы можете в
              любой момент отозвать согласие и запросить удаление данных, связавшись с нами по
              телефону{" "}
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-primary hover:underline">
                {PHONE}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
