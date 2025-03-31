import { Meowtivation } from '@models/meowtivation'

interface Props {
  key?: number
  meowtivation: Meowtivation
  onClick: () => void
}

// Simple starter component for the Card
export default function Card({ meowtivation, onClick }: Props) {
  return (
    <button className="text-center p-4 border rounded shadow" onClick={onClick}>
      <h3>Meowtivation Card Component</h3>
      <h4>{meowtivation.title}</h4>
      <p>This component will display meowtivation information</p>
    </button>
  )
}
