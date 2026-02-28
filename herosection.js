
Action: file_editor create /app/frontend/src/components/HeroSection.js --file-text "import { motion } from \"framer-motion\";
import { ChevronDown } from \"lucide-react\";
import { Button } from \"../components/ui/button\";

const LOGO_URL = \"https://customer-assets.emergentagent.com/job_73118296-249f-4a47-ba7a-7acd6ace3660/artifacts/8nq4q66i_PantryChef%20Logo.png\";

export default function HeroSection() {
  return (
    <section
      id=\"hero\"
      data-testid=\"hero-section\"
      className=\"relative min-h-screen flex items-center overflow-hidden noise-bg\"
      style={{ background: \"linear-gradient(135deg, #FDFBF7 0%, #FFF8E1 50%, #FDFBF7 100%)\" }}
    >
      {/* Decorative blobs */}
      <div className=\"absolute top-20 right-0 w-[500px] h-[500px] bg-pantry-orange/10 rounded-full blur-[120px] pointer-events-none\" />
      <div className=\"absolute bottom-0 left-0 w-[400px] h-[400px] bg-pantry-gold/15 rounded-full blur-[100px] pointer-events-none\" />

      <div className=\"section-container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24\">
        <div className=\"grid md:grid-cols-2 gap-12 md:gap-16 items-center\">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: \"easeOut\" }}
            className=\"text-left\"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className=\"inline-flex items-center gap-2 bg-pantry-orange/10 text-pantry-orange px-4 py-2 rounded-full text-sm font-semibold mb-6\"
            >
              <span className=\"w-2 h-2 bg-pantry-orange rounded-full animate-pulse\" />
              Prep, Dish & Go
            </motion.div>

            <h1
              data-testid=\"hero-title\"
              className=\"font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-pantry-brown tracking-tight leading-[1.1] mb-6\"
            >
              Cocina sin estres,{\" \"}
              <span className=\"text-pantry-orange italic\">come con placer</span>
            </h1>

            <p
              data-testid=\"hero-subtitle\"
              className=\"text-base md:text-lg text-pantry-brown/70 leading-relaxed max-w-lg mb-8\"
            >
              Pantry Chef te ayuda a preparar comidas saludables con lo que ya tienes
              en casa. Sin planificacion, sin complicaciones.
            </p>

            <div className=\"flex flex-col sm:flex-row gap-4\">
              <a href=\"#download\">
                <Button
                  data-testid=\"hero-download-btn\"
                  className=\"bg-pantry-orange text-white hover:bg-[#BF360C] rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95\"
                  size=\"lg\"
                >
                  Descargar gratis
                </Button>
              </a>
              <a href=\"#about\">
                <Button
                  data-testid=\"hero-learn-btn\"
                  variant=\"outline\"
                  className=\"border-2 border-pantry-brown text-pantry-brown hover:bg-pantry-brown hover:text-white rounded-full px-8 py-6 text-base font-semibold transition-all\"
                  size=\"lg\"
                >
                  Conocer mas
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className=\"relative flex justify-center\"
          >
            <div className=\"relative\">
              {/* Glow behind logo */}
              <div className=\"absolute inset-0 bg-pantry-orange/20 rounded-full blur-[60px] scale-75\" />
              <img
                src={LOGO_URL}
                alt=\"Pantry Chef Logo\"
                data-testid=\"hero-logo-image\"
                className=\"relative z-10 w-72 md:w-96 lg:w-[28rem] h-auto drop-shadow-2xl\"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className=\"absolute bottom-8 left-1/2 -translate-x-1/2\"
        >
          <a href=\"#about\" className=\"flex flex-col items-center gap-1 text-pantry-brown/40 hover:text-pantry-orange transition-colors\">
            <span className=\"text-xs font-medium\">Descubre mas</span>
            <ChevronDown size={20} className=\"animate-bounce\" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
"
Observation: Create successful: /app/frontend/src/components/HeroSection.js
