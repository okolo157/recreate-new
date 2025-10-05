export function SocialProof() {
  const stats = [
    {
      value: "20 days",
      label: "saved",
      description: "on daily builds.",
      company: "ACME Corp",
    },
    {
      value: "98%",
      label: "faster",
      description: "time to market.",
      company: "TechStart",
    },
    {
      value: "300%",
      label: "increase",
      description: "in productivity.",
      company: "DevTeam",
    },
    {
      value: "6x",
      label: "faster",
      description: "to build + deploy.",
      company: "BuildCo",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-px overflow-hidden rounded-lg border border-border/50 bg-border/50 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col justify-between gap-4 bg-card p-8">
            <div>
              <div className="mb-2 text-3xl font-bold">
                {stat.value} <span className="text-muted-foreground">{stat.label}</span>
              </div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
            <div className="text-lg font-semibold">{stat.company}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
