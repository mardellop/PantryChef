
Action: file_editor create /app/frontend/src/components/ValuesSection.js --file-text "import { motion } from \"framer-motion\";
import { Zap, UserCog, HeartPulse, Users2, Leaf } from \"lucide-react\";
import { Card, CardContent } from \"../components/ui/card\";

const values = [
  {
    icon: Zap,
    title: \"Conveniencia\",
    description: \"Si no es facil, no nos sirve. Todo en la app esta pensado para ahorrar tiempo y no complicarle la vida al cliente.\",
    color: \"bg-pantry-orange/10\",
    iconColor: \"text-pantry-orange\"
  },
  {
    icon: UserCog,
    title: \"Personalizacion\",
    description: \"Cada persona y cada paladar es un mundo. Nos adaptamos a los gustos y habitos de nuestros clientes.\",
    color: \"bg-[#FFD700]/10\",
    iconColor: \"text-[#D4A800]\"
  },
  {
    icon: HeartPulse,
    title: \"Salud y bienestar\",
    description: \"Creemos firmemente que comer sano no deberia ser un lujo. Recetas nutritivas al alcance de todos.\",
    color: \"bg-red-50\",
    iconColor: \"text-red-500\"
  },
  {
    icon: Users2,
    title: \"Comunidad\",
    description: \"Fomentamos el intercambio de ideas porque cocinar tambien es compartir con otros.\",
    color: \"bg-blue-50\",
    iconColor: \"text-blue-500\"
  },
  {
    icon: Leaf,
    title: \"Sostenibilidad\",
    description: \"Al ayudar a cocinar con lo que tienes, reducimos el desperdicio de alimentos y cuidamos el planeta.\",
    color: \"bg-green-50\",
    iconColor: \"text-green-600\"
  }
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ValuesSection() {
  return (
    <section
      id=\"values\"
      data-testid=\"values-section\"
      className=\"py-20 md:py-28 bg-pantry-stone relative overflow-hidden noise-bg\"
    >
      <div className=\"absolute bottom-0 left-0 w-80 h-80 bg-pantry-orange/8 rounded-full blur-[100px] pointer-events-none\" />

      <div className=\"section-container relative z-10\">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: \"-80px\" }}
          transition={{ duration: 0.5 }}
          className=\"text-center mb-16\"
        >
          <h2
            data-testid=\"values-title\"
            className=\"font-heading text-4xl md:text-5xl font-bold text-pantry-brown tracking-tight mb-4\"
          >
            Nuestros valores
          </h2>
          <p className=\"text-base md:text-lg text-pantry-brown/60 max-w-2xl mx-auto\">
            Los principios que guian cada decision y cada funcionalidad de Pantry Chef.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial=\"hidden\"
          whileInView=\"show\"
          viewport={{ once: true, margin: \"-80px\" }}
          className=\"grid sm:grid-cols-2 lg:grid-cols-3 gap-6\"
        >
          {values.map((val, i) => (
            <motion.div key={val.title} variants={item} className={i === 0 ? \"lg:col-span-1\" : \"\"}>
              <Card
                data-testid={`value-card-${i}`}
                className=\"bg-white rounded-3xl p-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EFEBE9] hover:-translate-y-1 transition-transform duration-300 h-full\"
              >
                <CardContent className=\"p-8\">
                  <div className={`w-12 h-12 rounded-2xl ${val.color} flex items-center justify-center mb-5`}>
                    <val.icon size={24} className={val.iconColor} strokeWidth={1.5} />
                  </div>
                  <h3 className=\"font-heading text-xl font-bold text-pantry-brown mb-3\">
                    {val.title}
                  </h3>
                  <p className=\"text-sm text-pantry-brown/60 leading-relaxed\">
                    {val.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
"
Observation: Create successful: /app/frontend/src/components/ValuesSection.js
