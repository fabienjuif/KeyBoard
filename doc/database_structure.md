## User
```
users: {
  $uid: {
    uid,
    name,
    lastname,
  }
}
```

## Reservation
```
reservations: {
  $user-uid: {
    uid: {
      uid,
      start,
      end,
      title,
      description,
    }
  }
}
```
