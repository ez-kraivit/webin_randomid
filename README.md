WEBIN RANDOMID by Kraivit Mongkhonsakunrit [![Build Status](https://travis-ci.com/ez-kraivit/webin_randomid.svg?branch=master)](https://travis-ci.com/ez-kraivit/webin_randomid)
========================
## Table Of Contents
* [Benchmark](#benchmark)
* [`Installation`](#installation)
* [`Usage`](#usage)
	* [`Import Module`](#importmodule)
	* [`Installation`](#installation)
	* [`Output`](#importmodule)

# Benchmark
```rust
$ node ./test/benchmark.js
nanoid                    2,280,683 ops/sec
customAlphabet            1,851,117 ops/sec
uuid v4                   1,348,425 ops/sec
uid.sync                    313,306 ops/sec
secure-random-string        294,161 ops/sec
cuid                        158,988 ops/sec
shortid                      37,222 ops/sec

Async:
async nanoid                 95,500 ops/sec
async customAlphabet         93,800 ops/sec
async secure-random-string   90,316 ops/sec
uid                          85,583 ops/sec

Non-secure:
non-secure nanoid         2,641,654 ops/sec
rndm                      2,447,086 ops/sec
webin_randomid            2,465,086 ops/sec
```
# [Installation](id:installation)

	npm install webin_randomid

# [Usage](id:usage)

* Import the module:

		const randomid = require('webin_randomid');

* Output:

        randomid.generateid('base62', 10)
		S42FWasYhb

พร้อมให้ใช้งานแล้วนะครับสำหรับ randomid รออัพเดทในอนาคต
