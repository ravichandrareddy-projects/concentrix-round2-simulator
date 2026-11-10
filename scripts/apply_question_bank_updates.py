#!/usr/bin/env python3
import json
import re

with open("scripts/curated_sentences.json", "r") as f:
    sentences = json.load(f)

with open("scripts/extra_aptitude.json", "r") as f:
    extra_aptitude = json.load(f)

with open("src/data/questionBank.ts", "r") as f:
    content = f.read()

# 1. Replace LISTEN_SENTENCES
sentences_json = json.dumps(sentences, indent=2)
pattern_ls = r"export const LISTEN_SENTENCES: SentenceItem\[\] = \[[\s\S]*?\n\];"
replacement_ls = f"export const LISTEN_SENTENCES: SentenceItem[] = {sentences_json};"
content = re.sub(pattern_ls, replacement_ls, content, count=1)

# 2. Append extra_aptitude to APTITUDE_QUESTIONS
# Find where APTITUDE_QUESTIONS ends right before MODERATION_SCENARIOS
pattern_apt_end = r"(\n\];\s*\n\s*export const MODERATION_SCENARIOS)"
# Format extra aptitude without the outer brackets
extra_apt_str = json.dumps(extra_aptitude, indent=2)
# Remove the leading [ and trailing ]
inner_extra = extra_apt_str.strip()
if inner_extra.startswith("["):
    inner_extra = inner_extra[1:].lstrip()
if inner_extra.endswith("]"):
    inner_extra = inner_extra[:-1].rstrip()

# Prepend a comma to inner_extra
replacement_apt_end = f",\n{inner_extra}\n];\n\nexport const MODERATION_SCENARIOS"

content = re.sub(pattern_apt_end, lambda m: replacement_apt_end, content, count=1)

with open("src/data/questionBank.ts", "w") as f:
    f.write(content)

print("src/data/questionBank.ts successfully updated!")
