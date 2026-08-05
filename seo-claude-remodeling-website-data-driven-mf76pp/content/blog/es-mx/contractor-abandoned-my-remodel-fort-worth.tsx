import Link from "next/link";
import { Phone, ShieldCheck, Camera, FileText, Wrench, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { cities } from "@/data/cities";
import { telHref, cityLabel } from "@/lib/helpers";

export default function ContractorAbandonedMyRemodelFortWorthEs() {
  return (
    <>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Respuesta corta</p>
        <p className="mt-2 text-charcoal leading-relaxed">
          Deje de pagar de inmediato, documente todo antes de que alguien más toque el sitio, y obtenga
          una evaluación por escrito del trabajo inconcluso de un contratista con licencia que acepte
          trabajos de relevo. En Fort Worth y todo el Metroplex de DFW, {company.name} toma proyectos
          abandonados de cocina, baño, piso, tablaroca y pintura, inspecciona lo que ya se instaló, y le
          da una cotización gratuita y detallada de lo que falta. Llame al{" "}
          <a href={telHref(company.phone)} className="font-semibold text-primary hover:underline">
            {company.phoneDisplay}
          </a>
          .
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          El orden importa — los propietarios que contratan un equipo de reemplazo antes de documentar el
          sitio generalmente pierden su ventaja frente al contratista original.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">Las primeras 48 horas</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Los baños y cocinas a medio terminar no se mantienen estables. La plomería abierta, una base de
        regadera sin sellar, o tablaroca expuesta pueden convertir un problema estético en un reclamo por
        daño de agua en cuestión de días. Actúe en este orden.
      </p>
      <ol className="mt-6 space-y-5">
        {[
          {
            title: "Detenga todos los pagos",
            body: "Cancele cualquier cheque pendiente, transferencia, o retiro programado. Si pagó con tarjeta de crédito, llame al emisor hoy mismo sobre una disputa — la mayoría tiene un plazo que comienza cuando se registra el cargo, no cuando se detiene el trabajo.",
          },
          {
            title: "Fotografíe todo antes de que se toque",
            body: "Tomas amplias de cada habitación, luego acercamientos de cada detalle inconcluso, con fecha y hora. Esto es lo más valioso que puede hacer en la próxima hora.",
          },
          {
            title: "Envíe un aviso por escrito",
            body: "Envíe un mensaje corto y objetivo por texto o correo al contratista: la fecha en que se detuvo el trabajo, el monto pagado, y una solicitud de que regrese antes de una fecha específica. Manténgalo sin emociones — se convierte en evidencia.",
          },
          {
            title: "Asegure el sitio contra daños",
            body: "Cierre el agua de los accesorios afectados, cubra los drenajes abiertos, y tape el cableado expuesto. Si se quitó una regadera y la base no está sellada, no use el espacio en absoluto.",
          },
          {
            title: "Obtenga una evaluación independiente por escrito",
            body: "Pida a un contratista con licencia que recorra el trabajo y anote la condición del trabajo existente y el alcance restante antes de que comience cualquier trabajo nuevo. Sin esto, nadie podrá determinar después qué defectos eran suyos y cuáles del contratista anterior.",
          },
        ].map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-charcoal">{step.title}</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">Evaluación gratuita de relevo en todo DFW</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          Recorremos el sitio, documentamos lo que se instaló, y le entregamos una cotización gratuita y
          detallada para el trabajo restante — sin obligación. Respondemos a cada solicitud dentro de un
          día hábil.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button size="lg" variant="white" asChild>
            <a href={telHref(company.phone)}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              Llame al {company.phoneDisplay}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            asChild
          >
            <Link href="/es-mx">Solicitar Cotización Gratuita</Link>
          </Button>
        </div>
      </div>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        ¿El trabajo realmente está abandonado — o solo va lento?
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        La diferencia importa, porque actuar demasiado pronto puede ponerlo en incumplimiento de su
        propio contrato. Los contratistas sí desaparecen por razones legítimas: una retención de permiso,
        un pedido de material atrasado, una lesión en otro sitio.
      </p>
      <div className="mt-6 overflow-x-auto rounded-lg border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="p-4 font-semibold text-charcoal">Señal</th>
              <th className="p-4 font-semibold text-charcoal">Probablemente retrasado</th>
              <th className="p-4 font-semibold text-charcoal">Probablemente abandonado</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Comunicación", "Responde, da fechas, explica la causa", "Deja de responder llamadas y mensajes por completo"],
              ["Materiales", "Suministros aún en el sitio, herramientas guardadas", "Herramientas y material sobrante retirados"],
              ["Dinero", "Los pagos coinciden con hitos completados", "Depósito grande recibido, poco trabajo hecho"],
              ["Subcontratistas", "Los subcontratistas confirman que están programados", "Los subcontratistas dicen que nunca les pagaron"],
              ["Tiempo", "Días sin avance", "Semanas sin equipo y sin explicación"],
            ].map((row) => (
              <tr key={row[0]} className="border-t">
                {row.map((cell, i) => (
                  <td key={i} className={`p-4 ${i === 0 ? "font-medium text-charcoal" : "text-muted-foreground"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Si tres o más de la columna derecha aplican, trátelo como abandono y siga los pasos anteriores.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        Qué documentar antes de que llegue el nuevo equipo
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Asuma que podría necesitar probar todo esto después, ante el emisor de su tarjeta, una corte de
        reclamos menores, o un abogado. Recopílelo mientras todavía existe.
      </p>
      <ul className="mt-5 space-y-3">
        {[
          "El contrato firmado, más cada revisión u orden de cambio",
          "Comprobante de cada pago — cheques cancelados, recibos de transferencia, estados de cuenta",
          "El hilo completo de mensajes y correos, exportado, no en capturas de pantalla sueltas",
          "Fotos y video con fecha de cada área inconclusa",
          "Cualquier papeleo de permisos, y si realmente se tramitó un permiso",
          "Nombres y teléfonos de cada subcontratista que trabajó en el proyecto",
          "Recibos de materiales que usted pagó y que ahora faltan en el sitio",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        El riesgo de gravamen en Texas que la mayoría de los propietarios pasa por alto
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Aquí está la parte que sorprende a la gente. En Texas, si su contratista se llevó su dinero y
        nunca les pagó a sus subcontratistas o proveedores de materiales, esas partes sin pagar
        generalmente pueden presentar un gravamen de constructor contra su casa — aunque usted ya haya
        pagado en su totalidad. La ley de vivienda familiar (homestead) de Texas sí ofrece cierta
        protección real para una residencia principal (un gravamen normalmente no puede aplicarse sin un
        contrato firmado por ambos cónyuges), pero los detalles dependen de cada caso, así que no asuma
        que está automáticamente cubierto.
      </p>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Podría recibir una carta de aviso de un proveedor de azulejo o un subcontratista de plomería que
        usted nunca contrató directamente. No la ignore — los plazos de la ley de gravámenes en Texas son
        cortos e inflexibles.
      </p>
      <ul className="mt-5 space-y-3">
        {[
          "Llame a cada subcontratista que pueda identificar y pregunte directamente si les pagaron",
          "Guarde cualquier carta de aviso que reciba y anote la fecha en que llegó",
          "Pida a su nuevo contratista una renuncia de gravamen firmada de cada subcontratista y proveedor en cada pago",
          "Si ya se presentó un aviso o gravamen, hable con un abogado de construcción de Texas",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="text-sm text-charcoal leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 rounded-lg border bg-muted p-4 text-sm text-muted-foreground">
        Nada en esta página es asesoría legal. Somos remodeladores, no abogados, y los plazos de
        gravámenes y las protecciones de vivienda familiar dependen de detalles específicos de su
        contrato y situación.
      </p>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        Cómo contratar a un contratista de relevo sin repetir el error
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        La mayoría de los contratistas rechazan discretamente los trabajos de relevo — no pueden ver qué
        hay detrás de la pared, así que no pueden respaldarlo. Los que sí lo aceptan deberían poder
        responder las siguientes siete preguntas sin dudar.
      </p>
      <ol className="mt-6 space-y-4">
        {[
          ["“¿Pondrá por escrito la condición del trabajo existente antes de comenzar?”", "Un sí los protege a ambos. Un encogimiento de hombros significa que a usted lo culparán por los defectos del equipo anterior."],
          ["“¿Qué partes garantizará, y cuáles no?”", "La respuesta honesta nunca es “todo.” Espere que le indiquen áreas específicas que deben abrirse o retirarse para estar cubiertas."],
          ["“¿Su aseguradora puede enviarme el certificado directamente?”", "No un PDF reenviado por el contratista — directo de la agencia de seguros, con fechas vigentes."],
          ["“¿La cotización es detallada o es una suma global?”", "Detallada. Después de un abandono, una suma global no le dice nada sobre lo que está comprando."],
          ["“¿Cuál es el calendario de pagos?”", "Pagos vinculados a hitos completados. Una exigencia de la mayor parte del dinero por adelantado es exactamente el patrón que acaba de costarle caro."],
          ["“¿El mismo equipo estará aquí todos los días, y quién es mi punto de contacto?”", "Un gerente de proyecto asignado por nombre. Los equipos rotativos son la forma en que los detalles se pierden dos veces."],
          ["“¿Proporcionará renuncias de gravamen con cada pago?”", "Esto cierra el ciclo del riesgo descrito arriba."],
        ].map(([q, a], i) => (
          <li key={q} className="rounded-lg border bg-card p-5">
            <p className="font-semibold text-charcoal">
              {i + 1}. {q}
            </p>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        Cuánto cuesta terminar una remodelación abandonada
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        Espere que terminar el proyecto cueste más que el saldo restante que le debía al contratista
        original. Para un trabajo de relevo típico en DFW, solo la mano de obra (los materiales son
        aparte y varían según el proyecto) cuesta aproximadamente{" "}
        <strong className="text-charcoal">$2,500–$3,300</strong>. Tres cosas elevan ese número:
      </p>
      <ul className="mt-5 space-y-4">
        {[
          {
            icon: Wrench,
            title: "Demolición correctiva",
            body: "Bases de regadera mal impermeabilizadas, sustrato de azulejo desnivelado, y enmarcado insuficiente tienen que salir. Esta es la línea más grande en la mayoría de las cotizaciones de relevo de baños.",
          },
          {
            icon: FileText,
            title: "Materiales faltantes",
            body: "Los propietarios frecuentemente descubren que los gabinetes, azulejo, o accesorios que ya pagaron nunca se ordenaron.",
          },
          {
            icon: Camera,
            title: "Evaluación y planificación",
            body: "Diagnosticar el trabajo a medio hacer de otra persona toma horas reales antes de que se use una sola herramienta.",
          },
        ].map((item) => (
          <li key={item.title} className="flex gap-3 rounded-lg border bg-card p-5">
            <item.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="font-semibold text-charcoal">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold tracking-tight text-charcoal">
        Cómo funciona nuestro proceso de relevo
      </h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        {company.name} es un contratista con licencia y seguro en Fort Worth que sirve al Metroplex de
        DFW desde {company.foundedYear}. Los trabajos de relevo siguen un proceso ligeramente distinto a
        una remodelación normal.
      </p>
      <ol className="mt-6 space-y-4">
        {[
          ["Recorrido documentado — gratis", "Fotografiamos y anotamos la condición de cada superficie que tocó el equipo anterior, y le damos una copia haya contratado o no. Ese registro es suyo."],
          ["Cotización detallada del alcance restante", "Dividida en dos secciones: trabajo que se puede terminar tal como está, y trabajo que debe rehacerse. Usted ve exactamente cuál es cuál y cuánto cuesta cada uno."],
          ["Trabajo correctivo primero, acabados después", "La impermeabilización, el enmarcado, y la instalación preliminar se verifican antes de que algo decorativo vuelva a la pared."],
          ["Pagos por hitos y garantía de mano de obra", "Usted paga conforme se completan las etapas. Todo lo que construimos está cubierto por nuestra garantía de mano de obra; el trabajo que no realizamos nosotros se documenta como excluido, por escrito, desde el principio."],
        ].map(([title, body], i) => (
          <li key={title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-charcoal">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 rounded-lg border bg-muted p-6">
        <h3 className="font-semibold text-charcoal">Sirviendo a {cities.length} comunidades de DFW</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {cities.map(cityLabel).join(" · ")}
        </p>
      </div>

      <div className="mt-10 rounded-lg bg-primary p-6 text-white sm:p-8">
        <h3 className="text-lg font-semibold">¿Listo para una evaluación gratuita y documentada?</h3>
        <p className="mt-2 text-sm text-blue-100 leading-relaxed">
          Llame al {company.phoneDisplay} o solicite una cotización gratuita — respondemos dentro de un
          día hábil.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button size="lg" variant="white" asChild>
            <a href={telHref(company.phone)}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              Llame al {company.phoneDisplay}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            asChild
          >
            <Link href="/es-mx">Solicitar Cotización Gratuita</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
