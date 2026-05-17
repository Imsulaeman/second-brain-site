---
title: "Python Basics Review"
type: source
tags: [python, programming, reference, basics, freecodecamp]
created: 2026-05-04
updated: 2026-05-10
sources: 1
---

# Python Basics Review

**Source:** freeCodeCamp — *Learn Python (v9)*, Review Python Basics module
**Type:** Structured reference / cheat sheet

---

## What Python Is

A general-purpose, dynamically-typed, interpreted language. Used in data science, ML, web development, scripting, automation, embedded systems (MicroPython, Raspberry Pi). Install from `python.org`.

---

## Variables

```python
name = 'John Doe'    # string
age = 25             # integer
```

**Naming rules:** Start with letter or `_`; alphanumeric + underscores only; case-sensitive; no reserved keywords; use `snake_case` for multi-word names.

**Comments:**
```python
# single-line comment
"""
multi-line string / block comment
"""
```

---

## Data Types

| Type | Example | Notes |
|------|---------|-------|
| `int` | `10` | Whole number |
| `float` | `4.5` | Decimal number |
| `str` | `'hello'` | Sequence of characters |
| `bool` | `True` / `False` | |
| `list` | `[22, 'hi', 3.14]` | Ordered, mutable, mixed types |
| `tuple` | `(7, 5, 8)` | Ordered, **immutable** |
| `dict` | `{"name": "Alice"}` | Key-value pairs |
| `set` | `{7, 5, 8}` | Unordered, unique elements |
| `range` | `range(5)` | Sequence of numbers |
| `None` | `None` | Absence of value |

**Immutable:** `int`, `float`, `complex`, `bool`, `str`, `tuple`, `range`, `None`
**Mutable:** `list`, `set`, `dict`

```python
type(greeting)            # <class 'str'>
isinstance(greeting, str) # True
```

---

## Strings

**Access and slice:**
```python
s = 'Python is fun!'
s[0]      # 'P'
s[-1]     # '!'
s[0:6]    # 'Python'
s[7:]     # 'is fun!'
s[::2]    # 'Pto sfn'   (step)
len(s)    # 14
```

**Create:**
```python
'hello' + ' world'              # concatenation
greeting += '!'                 # in-place concatenation
f'My name is {name}.'          # f-string (preferred)
'hello'.replace('hello', 'hi') # 'hi'
```

**`in` operator:**
```python
'Hello' in 'Hello world'  # True
```

**Common string methods:**

| Method | Returns |
|--------|---------|
| `s.upper()` / `s.lower()` | All caps / all lower |
| `s.strip()` | Strip leading/trailing whitespace |
| `s.replace(old, new)` | New string with substitution |
| `s.split(sep)` | List of substrings |
| `sep.join(iterable)` | String from iterable |
| `s.startswith(p)` / `s.endswith(p)` | Boolean prefix/suffix check |
| `s.find(sub)` | Index of first match, or `-1` |
| `s.count(sub)` | Count of occurrences |
| `s.capitalize()` | First char upper, rest lower |
| `s.title()` | First char of each word upper |
| `s.isupper()` / `s.islower()` | Boolean all-upper / all-lower |
| `str.maketrans(a, b)` + `s.translate(t)` | Character-level translation |

---

## Numbers

**Operators:**
```python
56 + 12    # 68   addition
56 - 12    # 44   subtraction
56 * 12    # 672  multiplication
56 / 12    # 4.67 division (always float)
56 % 12    # 8    modulo (remainder)
56 // 12   # 4    floor division
4 ** 2     # 16   exponentiation
```

int + float → float automatically.

**Functions:**
```python
float(4)      # 4.0
int(4.9)      # 4  (truncates, does not round)
round(3.4)    # 3
round(7.7)    # 8
abs(-13)      # 13
pow(2, 3)     # 8
```

**Augmented assignments:** `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`, `&=`, `^=`, `>>=`, `<<=`

---

## Functions

```python
def get_sum(num_1, num_2=2):   # default parameter
    return num_1 + num_2

result = get_sum(3, 4)  # 7
result = get_sum(3)     # 5  (uses default)
```

- Functions without an explicit `return` return `None`.
- Calling with wrong number of arguments raises `TypeError`.

**Common built-ins:**
```python
input('What is your name?')  # prompt user (returns str)
int('42')   # 42
int(True)   # 1
int(False)  # 0
```

---

## Scope (LEGB Rule)

| Scope | Definition |
|-------|------------|
| **Local** | Inside the current function |
| **Enclosing** | Outer function (for nested functions) |
| **Global** | Top-level of the module |
| **Built-in** | Python's reserved names (`print`, `type`, `len`, …) |

```python
tax = 0.70                        # global
def get_total(subtotal):
    total = subtotal + subtotal * tax  # accesses global
    return total
```

---

## Comparison Operators

| Operator | Meaning |
|----------|---------|
| `==` | Equal |
| `!=` | Not equal |
| `>` / `<` | Strictly greater / less |
| `>=` / `<=` | Greater or equal / less or equal |

All return `True` or `False`.

---

## Control Flow

```python
if age >= 18:
    print('adult')
elif age >= 13:
    print('teenager')
else:
    print('child')
```

Nesting is supported. Conditions evaluate to truthy/falsy.

**Falsy values:** `None`, `False`, `0`, `0.0`, `''` (empty string), empty collections
**Truthy:** everything else (non-zero numbers, non-empty strings, etc.)

```python
bool(0)       # False
bool('Hello') # True
```

---

## Boolean Operators

| Operator | Behavior |
|----------|----------|
| `and` | Returns first falsy operand, or last if all truthy |
| `or` | Returns first truthy operand, or last if all falsy |
| `not` | Inverts boolean value; always returns `True`/`False` |

**Short-circuiting:** `and` and `or` stop evaluating as soon as the result is determined.

```python
is_citizen and age >= 18  # both must be true
age < 18 or is_student    # either must be true
not is_admin              # inverts
```
