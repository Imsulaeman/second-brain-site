---
title: "Python Loops and Sequences"
type: source
tags: [python, programming, reference, loops, sequences, freecodecamp]
created: 2026-05-06
updated: 2026-05-10
sources: 1
---

# Python Loops and Sequences

**Source:** freeCodeCamp — *Learn Python (v9)*, Loops and Sequences module
**Companion to:** [[sources/python-basics-review]]

---

## Lists

Ordered, mutable, zero-based indexed. Can hold mixed types.

```python
cities = ['Los Angeles', 'London', 'Tokyo']
cities[0]   # 'Los Angeles'
cities[-1]  # 'Tokyo'  (negative indexing from end)
len(cities) # 3
```

**Create:** `list('Jessica')` → `['J','e','s','s','i','c','a']`

**Modify:**
```python
lst[0] = 'new value'   # update by index
del lst[1]             # remove by index
```

**Check membership:** `'Rust' in lst` → `True`/`False`

**Unpack:**
```python
name, age, job = ['Alice', 34, 'Dev']  # exact count required
name, *rest   = ['Alice', 34, 'Dev']  # collect remainder with *
```

**Slice:** `lst[start:stop:step]` — stop is non-inclusive
```python
desserts[1:3]   # ['Cookies', 'Ice Cream']
numbers[1::2]   # every other element starting at index 1
```

**Nest:** `developer[2][1]` — chain indices to access nested lists

---

## List Methods

| Method | Behaviour |
|--------|-----------|
| `append(x)` | Add `x` to end (appends a list as a single element) |
| `extend(iterable)` | Flatten and add all items from iterable |
| `insert(i, x)` | Insert `x` before index `i` |
| `remove(x)` | Remove first occurrence of `x` |
| `pop(i)` | Remove and return item at index `i` (default: last) |
| `clear()` | Remove all items |
| `sort()` | Sort in place |
| `reverse()` | Reverse in place |
| `index(x)` | Index of first `x` (raises `ValueError` if not found) |

**`sorted(lst)`** — returns a new sorted list, original unchanged.

---

## Tuples

Ordered, **immutable**, zero-based indexed. Use `()` or `tuple()`.

```python
dev = ('Alice', 34, 'Rust Developer')
dev[1]    # 34
dev[-2]   # 34
```

- Mutation raises `TypeError`; deletion raises `TypeError`
- Supports: indexing, negative indexing, slicing, `in`, unpacking, `*` rest collection — same as lists
- **Use tuple when:** the collection is fixed and should not change
- **Use list when:** you need to add, remove, or update elements

**Tuple methods:**

| Method | Behaviour |
|--------|-----------|
| `count(x)` | How many times `x` appears |
| `index(x, start?, end?)` | Index of first `x` in optional range |
| `sorted(tpl)` | Returns a new sorted **list** (not tuple) |

`sorted(iterable, key=len, reverse=True)` — optional `key` and `reverse` args work on any iterable.

---

## `for` Loop

Iterate over any sequence (list, tuple, string, range…).

```python
for language in ['Rust', 'Java', 'Python']:
    print(language)

for char in 'code':
    print(char)
```

**Nested loops:** outer loop × inner loop iterations.

**`else` clause:** runs only if loop was NOT terminated by `break`.

---

## `while` Loop

Repeats while condition is `True`.

```python
while guess != secret_number:
    guess = int(input('Guess: '))
```

Also supports `else` clause (executes if no `break`).

---

## `break` and `continue`

```python
# break — exit loop immediately
for dev in names:
    if dev == 'Naomi': break
    print(dev)         # prints only up to (not including) Naomi

# continue — skip current iteration
for dev in names:
    if dev == 'Naomi': continue
    print(dev)         # prints all except Naomi
```

---

## `range()`

```python
range(stop)            # 0 … stop-1
range(start, stop)     # start … stop-1
range(start, stop, step)

range(2, 11, 2)        # 2, 4, 6, 8, 10
range(40, 0, -10)      # 40, 30, 20, 10  (decrement)
list(range(2, 11, 2))  # [2, 4, 6, 8, 10]
```

- `stop` is non-inclusive
- Default `start=0`, default `step=1`
- Only accepts integers (float → `TypeError`); no args → `TypeError`

---

## `enumerate()` and `zip()`

```python
# enumerate — index + value pairs
for i, lang in enumerate(languages):          # starts at 0
for i, lang in enumerate(languages, start=1): # custom start

list(enumerate(languages))
# [(0, 'Spanish'), (1, 'English'), ...]

# zip — parallel iteration over multiple iterables
for name, id in zip(developers, ids):
    print(name, id)
# stops at shortest iterable
```

---

## List Comprehensions

Create a new list in one line:

```python
even = [num for num in range(21) if num % 2 == 0]
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

Pattern: `[expression for item in iterable if condition]`

---

## Iterable Functions

```python
# filter(func, iterable) — keep items where func returns True
long_words = list(filter(lambda w: len(w) > 4, words))

# map(func, iterable) — apply func to every item
fahrenheit = list(map(lambda t: (t * 9/5) + 32, celsius))

# sum(iterable, start=0)
sum([5, 10, 15, 20])       # 50
sum([5, 10, 15, 20], 10)   # 60
```

---

## Lambda Functions

Anonymous, single-expression functions. Most useful as arguments to `filter()`, `map()`, `sorted()`.

```python
filter(lambda x: x % 2 == 0, numbers)  # even numbers
sorted(langs, key=lambda s: len(s))     # sort by length
```

Best practices: don't assign to a variable; keep simple and short; use for one-off inline functions.
