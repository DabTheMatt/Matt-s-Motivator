const tabs = [
      {
        id: 1000,
        title: 'Programming',
        background: '#ffad33',
      },
      {
        id: 2000,
        title: 'Writing',
        background: '#80ccff',
      },
      {
        id: 3000,
        title: 'Learning',
        background: '#ff3300',
      },
    ]
    
    const cards = [
      {
        id: 100,
        title: 'House ideas',
        board: 1000,
        cards: [
          {
            id: 1,
            text: 'card 1',
          },
          {
            id: 2,
            text: 'card 2',
          },
        ],
      },
      {
        id: 200,
        title: 'Travel ideas',
        board: 1000,
        cards: [
          {
            id: 11,
            text: 'card 11',
          },
          {
            id: 22,
            text: 'card 22',
          },
        ],
      },
      {
        id: 200,
        title: 'Travel ideas 2',
        board: 2000,
        cards: [
          {
            id: 11,
            text: 'card 11',
          },
          {
            id: 22,
            text: 'card 22',
          },
        ],
      },
    ]
    
    const data = {
    tabs,
    cards,
    }
    
    export default data
    
    