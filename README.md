# playlistify

# title

Use spoitfy API to search song data to build individualized playlists. Users can have multiple playlists which each contain multiple songs.

## models

- User
    - id (primary key auto increment)
    - username
    - email
    - password
    - access token

- Playlist
    - id (primary key auto increment)
    - name
    - genre / mood
    - playlist will have many songs
    - playlist will belong to one user


- Song
    - id (primary key auto increment)
    - artist
    - album
    - danceability index
    - beats per minute
    - song can belong to many playlists

## views

- landing page 
- login
- homepage - displays playlist and song info
- playlist creation

## User Story

AS A a rising star in the DJ world
I WANT to build playlists based on 'dancability'
SO THAT I have quick access to different 'mood' music and create a memorable experience for party goers





