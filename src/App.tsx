import { useState } from "react"
import { Button } from "@/components/ui/button"

function App() {
  const [message, setMessage] = useState<string | null>(null)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background">
      <Button size="lg" onClick={() => setMessage("timbó é top")}>
        Hello World
      </Button>

      {message && (
        <p className="text-2xl font-semibold text-foreground">{message}</p>
      )}
    </div>
  )
}

export default App
