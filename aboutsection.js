
Action: file_editor create /app/frontend/src/components/AboutSection.js --file-text "import { motion } from \"framer-motion\";
import { Users, Sparkles } from \"lucide-react\";

export default function AboutSection() {
  return (
    <section
      id=\"about\"
      data-testid=\"about-section\"
      className=\"py-20 md:py-28 bg-white relative overflow-hidden\"
    >
      <div className=\"absolute top-0 right-0 w-96 h-96 bg-pantry-gold/10 rounded-full blur-[100px] pointer-events-none\" />

      <div className=\"section-container relative z-10\">
        <div className=\"grid md:grid-cols-2 gap-12 md:gap-20 items-center\">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: \"-100px\" }}
            transition={{ duration: 0.6 }}
            className=\"relative\"
          >
            <div className=\"relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(62,39,35,0.12)]\">
              <img
                src=\"https://images.unsplash.com/photo-1768726134345-a8efdcfcc3c6?w=800&h=600&fit=crop\"
                alt=\"Amigos cocinando juntos\"
                data-testid=\"about-image\"
                className=\"w-full h-[400px] md:h-[500px] object-cover\"
              />
              <div className=\"absolute inset-0 bg-gradient-to-t from-pantry-brown/30 to-transparent\" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className=\"absolute -bottom-6 -right-4 md:right-8 bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(62,39,35,0.1)] border border-[#EFEBE9]\"
            >
              <div className=\"flex items-center gap-3\">
                <div className=\"w-10 h-10 rounded-full bg-pantry-orange/10 flex items-center justify-center\">
                  <Users size={20} className=\"text-pantry-orange\" />
                </div>
                <div>
                  <p className=\"text-sm font-bold text-pantry-brown\">+10,000</p>
                  <p className=\"text-xs text-pantry-brown/60\">Usuarios activos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: \"-100px\" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className=\"inline-flex items-center gap-2 bg-pantry-stone px-4 py-2 rounded-full text-sm font-semibold text-pantry-brown/70 mb-6\">
              <Sparkles size={16} className=\"text-pantry-gold\" />
              Nuestra historia
            </div>

            <h2
              data-testid=\"about-title\"
              className=\"font-heading text-4xl md:text-5xl font-bold text-pantry-brown tracking-tight mb-6\"
            >
              Tu mejor companero en la cocina
            </h2>

            <div className=\"space-y-4 text-base md:text-lg text-pantry-brown/70 leading-relaxed\">
              <p>
                Somos <strong className=\"text-pantry-brown\">Pantry Chef</strong>, una aplicacion
                movil disenada para que cocinar sea una experiencia sencilla, nutritiva y, sobre
                todo, sin estres.
              </p>
              <p>
                Nuestro publico objetivo son <strong className=\"text-pantry-brown\">estudiantes y
                profesionales</strong> que no tienen tiempo para planificar las comidas de la
                semana, pero que no quieren renunciar a una alimentacion saludable.
              </p>
              <p>
                Utilizamos la tecnologia para que el usuario aproveche todo lo que tiene en casa
                y, ademas, pueda conectarse con la mejor comunidad. Queremos que cocinar deje de
                ser una tarea pendiente para convertirse en{\" \"}
                <strong className=\"text-pantry-orange\">algo disfrutable y sostenible</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"
Observation: Create successful: /app/frontend/src/components/AboutSection.js
