import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Room from './Room'

const RoomList = ({ rooms, setCurrentRoom }) => {
  return (
    <nav
      className={`RoomList ${css(styles.roomList)}`}
    >
      <h2 className={css(styles.h2)}>
        Rooms
      </h2>
      <ul className={css(styles.list)}>
        {
          Object.keys(rooms).map(
            roomName => <Room
                          roomName={roomName}
                          key={roomName}
                          setCurrentRoom={setCurrentRoom}
                        />
          )
        }

      </ul>
    </nav>
  )
}

const styles = StyleSheet.create({
  roomList: {
    padding: '0 1rem',
  },

  h2: {
    fontSize: '1rem',
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },

  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
})

export default RoomList