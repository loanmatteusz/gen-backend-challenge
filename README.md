<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## About

This repository is a tech challenge. I use [Nest](https://github.com/nestjs/nest) framework TypeScript, Prisma, Postgres and GraphQL.

This project is a simple CRUD where I use GraphQL to do management of my favorite Songs.

## Project setup

### If you want to run local
```bash
$ yarn install
```

### Run in a Docker Container

```bash
$ docker compose up
# or
$ docker-compose up
```

### Check GraphQL Api Playgound

```bash
http://localhost:8000/graphql
```

### Use GraphQL Playground

#### Create your User
```bash
mutation {
  createUser(
    input: {name: "test", email: "test@mail.com", password: "test"}
  )
}
```

#### Generate your Token
```bash
mutation {
  login(
    input: {
      email: "test@mail.com",
      password: "test"
    }
  )
}
```

#### Post Music
```bash
mutation {
  postMusic(
    input: {
      title: "Snuff",
      link: "https://youtu.be/3p92RK7KvVA"
    }
  ) {
    id,
    title,
    link
  }
}
```

#### Update Music
```bash
mutation {
  updateMusic(input: {
    id: "use_id_of_last_post_here",
    title: "Linkin Park - The Emptiness Machine (Lyrics Video)"
  }) {
    id
    title
    link
  }
}
```

#### List All Musics
```bash
query {
  listAllMusic {
    id
    title
    link
  }
}
```

#### Delete Music
```bash
mutation {
  deleteMusic(musicId: "use_id_of_last_post_here")
}
```


## Frontend

- [Frontend Music Application](https://github.com/loanmatteusz/gen-frontend-challenge)


## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
