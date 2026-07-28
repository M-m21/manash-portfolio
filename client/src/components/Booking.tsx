return (
  <>
    {/*
    <section id="booking" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Schedule a Meeting
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Let's discuss your project, collaboration opportunity, or any
              questions you might have
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Calendar,
                title: "30-Minute Call",
                description:
                  "Quick discussion about your project or inquiry",
              },
              {
                icon: Clock,
                title: "1-Hour Meeting",
                description:
                  "In-depth discussion and collaboration planning",
              },
              {
                icon: MapPin,
                title: "Custom Meeting",
                description:
                  "Tailored meeting for specific needs",
              },
            ].map((option) => {
              const Icon = option.icon;
              return (
                <motion.div key={option.title} variants={itemVariants}>
                  <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all duration-300 h-full text-center">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {option.title}
                    </h3>
                    <p className="text-foreground/80">
                      {option.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Card className="p-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 inline-block">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Connect?
              </h3>
              <p className="text-foreground/80 mb-8 max-w-md">
                Choose a time that works best for you. I'm available for calls,
                meetings, and collaborations.
              </p>

              <Button size="lg" className="rounded-lg" asChild>
                <a
                  href="https://calendly.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Meeting
                </a>
              </Button>

              <p className="text-sm text-foreground/60 mt-6">
                Or email me directly at hello@example.com
              </p>
            </Card>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            {[
              {
                label: "Timezone",
                value: "Pacific Time (PT)",
              },
              {
                label: "Response Time",
                value: "Within 24 hours",
              },
            ].map((info) => (
              <Card
                key={info.label}
                className="p-6 bg-card border-border/50 text-center"
              >
                <p className="text-sm text-foreground/60 mb-2">
                  {info.label}
                </p>
                <p className="text-lg font-bold text-foreground">
                  {info.value}
                </p>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
    */}
  </>
);