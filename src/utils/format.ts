export function toApprecision(num: number, digits: number) {
  let s1 = num.toString();
  let i = s1.indexOf(".");
  return i == -1 || s1.length - i - 1 <= digits ? s1 : num.toFixed(digits).replace(/\.?0+$/, "");
}

export function formatHtml(_str: string, _color = 0, _b = false, _size = "14", _font = "") {
  return `<span style="color:#${_color.toString(16).padStart(6, "0")};${
    _b ? "font-weight:bold;" : ""
  }${_size ? `font-size:${_size};` : ""}${_font ? `font-family:${_font};` : ""}">${_str.replaceAll(
    "\n",
    "<br>"
  )}</span>`;
}

export function formatHtmlBr(_arr: string[]) {
  return _arr.join("<br>");
}

export function formatTimeSpan(_time_secs: number) {
  return (
    Math.floor(_time_secs / 3600) +
    ":" +
    Math.floor((_time_secs / 60) % 60)
      .toString()
      .padStart(2, "0") +
    ":" +
    (_time_secs % 60).toString().padStart(2, "0")
  );
}
