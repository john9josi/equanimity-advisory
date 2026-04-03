#!/usr/bin/env bash
# validate.sh — HTML5 validation via W3C Nu validator API
# Usage: ./validate.sh [file]   (defaults to index.html)

FILE="${1:-index.html}"
VALIDATOR="https://validator.w3.org/nu/?out=text"

if [ ! -f "$FILE" ]; then
  echo "Error: $FILE not found" >&2
  exit 1
fi

echo "Validating $FILE against W3C Nu HTML5 validator..."
echo ""

RESULT=$(curl -s \
  -H "Content-Type: text/html; charset=utf-8" \
  --data-binary "@$FILE" \
  "$VALIDATOR")

if echo "$RESULT" | grep -qE "^Error|^Warning"; then
  echo "$RESULT"
  echo ""
  echo "Validation complete — issues found above."
  exit 1
else
  echo "$RESULT"
  echo "No errors or warnings detected."
  exit 0
fi
