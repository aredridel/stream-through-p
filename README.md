stream-through-p
================

Pass each datum in a stream through a function.

With promises!

Explanation
-----------

A wrapper around through2 that expects promises, rather than a context
sensitive calling convention. This should reduce boilerplate code for dealing
with the often-ignored encoding parameter, and focuses on the usual use-cases:
an asynchronous map over time.

It only operates in object mode. I find that explicit buffering and reblocking
is more useful than having strings automatically concatenated, and leaves the
interface agnostic of the mode of the streams.

Use
----

```
streamOfItems()
    .pipe(throughp(e => db.lookup(e)))
    .pipe(throughp(JSON.stringify))
    .pipe(process.stdout)
```
