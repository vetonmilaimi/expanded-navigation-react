import { useState } from 'react'
import './App.css'

const tree = {
  children: [
    {
      name: 'src',
      children: [
        {
          name: 'assets',
          children: [
            {
              name: 'test.png'
            }
          ]
        },
        {
          name: 'components',
          children: [
            {
              name: 'card',
              children: [
                {
                  name: 'card.component.tsx'
                },
                {
                  name: 'index.tsx'
                }
              ]
            }
          ]
        },
        {
          name: 'App.tsx'
        }
      ]
    },
    {
      name: 'package.json'
    }
  ]
}

interface IEntry {
  name: string
  children?: IEntry[]
}

function Entry({ entry, depth }: { entry: IEntry; depth: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div style={{ paddingLeft: `${depth * 10}px`, borderLeft: '2px solid white' }}>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {entry.children ? (!isExpanded ? '+ ' : '- ') : null}
        {entry.name}
      </button>
      {isExpanded &&
        entry?.children?.map((entry: IEntry) => {
          return <Entry entry={entry} depth={depth + 1} />
        })}
    </div>
  )
}

function App() {
  return (
    <div>
      {tree.children.map((entry) => {
        return <Entry entry={entry} depth={1} />
      })}
    </div>
  )
}

export default App
