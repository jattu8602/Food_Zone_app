import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-QSQYAWSL.js";

// node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({
  "node_modules/shallowequal/index.js"(exports, module) {
    module.exports = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/tslib/tslib.es6.js
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t[p] = s2[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i2 = 0, l2 = from2.length, ar; i2 < l2; i2++) {
      if (ar || !(i2 in from2)) {
        if (!ar)
          ar = Array.prototype.slice.call(from2, 0, i2);
        ar[i2] = from2[i2];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from2));
}

// node_modules/styled-components/dist/styled-components.browser.esm.js
var import_react = __toESM(require_react());
var import_shallowequal = __toESM(require_shallowequal());

// node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}

// node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1)
              characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
    for (var x2 = 0, y = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y : replace(y, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// node_modules/stylis/src/Prefixer.js
function prefix(value, length2, children) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 4789:
      return MOZ + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
    case 6828:
    case 4268:
    case 2903:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4200:
      if (!match(value, /flex-|baseline/))
        return MS + "grid-column-align" + substr(value, length2) + value;
      break;
    case 2592:
    case 3360:
      return MS + replace(value, "template-", "") + value;
    case 4384:
    case 3616:
      if (children && children.some(function(element, index) {
        return length2 = index, match(element.props, /grid-\w+-end/);
      })) {
        return ~indexof(value + (children = children[length2].value), "span") ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span") ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
      }
      return MS + replace(value, "-start", "") + value;
    case 4896:
    case 4128:
      return children && children.some(function(element) {
        return match(element.props, /grid-\w+-start/);
      }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
        }
      break;
    case 5152:
    case 5920:
      return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a2, b2, c2, d, e, f) {
        return MS + a2 + ":" + b2 + f + (c2 ? MS + a2 + "-span:" + (d ? e : +e - +b2) + f : "") + value;
      });
    case 4949:
      if (charat(value, length2 + 6) === 121)
        return replace(value, ":", ":" + WEBKIT) + value;
      break;
    case 6444:
      switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
        case 120:
          return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        case 100:
          return replace(value, ":", ":" + MS) + value;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return replace(value, "scroll-", "scroll-snap-") + value;
  }
  return value;
}

// node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i2 = 0; i2 < length2; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length)
        break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i2 = 0; i2 < length2; i2++)
      output += collection[i2](element, index, children, callback) || "";
    return output;
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length, children);
          return;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
                case "::placeholder":
                  return serialize([
                    copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
                    copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
                    copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })
                  ], callback);
              }
              return "";
            });
      }
  }
}

// node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// node_modules/styled-components/dist/styled-components.browser.esm.js
var v = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var g = "6.0.0-rc.1";
var S = "undefined" != typeof window && "HTMLElement" in window;
var w = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : true);
var b = {};
var E = /invalid hook call/i;
var N = /* @__PURE__ */ new Set();
var P = function(t, n2) {
  if (true) {
    var o2 = n2 ? ' with the id of "'.concat(n2, '"') : "", s2 = "The component ".concat(t).concat(o2, " has been created dynamically.\n") + "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.", i2 = console.error;
    try {
      var a2 = true;
      console.error = function(t2) {
        for (var n3 = [], r2 = 1; r2 < arguments.length; r2++)
          n3[r2 - 1] = arguments[r2];
        E.test(t2) ? (a2 = false, N.delete(s2)) : i2.apply(void 0, __spreadArray([t2], n3, false));
      }, (0, import_react.useRef)(), a2 && !N.has(s2) && (console.warn(s2), N.add(s2));
    } catch (e) {
      E.test(e.message) && N.delete(s2);
    } finally {
      console.error = i2;
    }
  }
};
var _ = Object.freeze([]);
var C = Object.freeze({});
function I(e, t, n2) {
  return void 0 === n2 && (n2 = C), e.theme !== n2.theme && e.theme || t || n2.theme;
}
var A = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]);
var O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var D = /(^-|-$)/g;
function R(e) {
  return e.replace(O, "-").replace(D, "");
}
var T = /(a)(d)/gi;
var j = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function x(e) {
  var t, n2 = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    n2 = j(t % 52) + n2;
  return (j(t % 52) + n2).replace(T, "$1-$2");
}
var k;
var V = function(e, t) {
  for (var n2 = t.length; n2; )
    e = 33 * e ^ t.charCodeAt(--n2);
  return e;
};
var M = function(e) {
  return V(5381, e);
};
function F(e) {
  return x(M(e) >>> 0);
}
function B(e) {
  return "string" == typeof e && e || e.displayName || e.name || "Component";
}
function $(e) {
  return "string" == typeof e && e.charAt(0) === e.charAt(0).toLowerCase();
}
var z = "function" == typeof Symbol && Symbol.for;
var L = z ? Symbol.for("react.memo") : 60115;
var G = z ? Symbol.for("react.forward_ref") : 60112;
var Y = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true };
var W = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
var q = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
var H = ((k = {})[G] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, k[L] = q, k);
function U(e) {
  return ("type" in (t = e) && t.type.$$typeof) === L ? q : "$$typeof" in e ? H[e.$$typeof] : Y;
  var t;
}
var J = Object.defineProperty;
var X = Object.getOwnPropertyNames;
var Z = Object.getOwnPropertySymbols;
var K = Object.getOwnPropertyDescriptor;
var Q = Object.getPrototypeOf;
var ee = Object.prototype;
function te(e, t, n2) {
  if ("string" != typeof t) {
    if (ee) {
      var r2 = Q(t);
      r2 && r2 !== ee && te(e, r2, n2);
    }
    var o2 = X(t);
    Z && (o2 = o2.concat(Z(t)));
    for (var s2 = U(e), i2 = U(t), a2 = 0; a2 < o2.length; ++a2) {
      var c2 = o2[a2];
      if (!(c2 in W || n2 && n2[c2] || i2 && c2 in i2 || s2 && c2 in s2)) {
        var l2 = K(t, c2);
        try {
          J(e, c2, l2);
        } catch (e2) {
        }
      }
    }
  }
  return e;
}
function ne(e) {
  return "function" == typeof e;
}
function re(e) {
  return "object" == typeof e && "styledComponentId" in e;
}
function oe(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function se(e, t) {
  if (0 === e.length)
    return "";
  for (var n2 = e[0], r2 = 1; r2 < e.length; r2++)
    n2 += t ? t + e[r2] : e[r2];
  return n2;
}
function ie(e) {
  return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function ae(e, t, n2) {
  if (void 0 === n2 && (n2 = false), !n2 && !ie(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var r2 = 0; r2 < t.length; r2++)
      e[r2] = ae(e[r2], t[r2]);
  else if (ie(t))
    for (var r2 in t)
      e[r2] = ae(e[r2], t[r2]);
  return e;
}
var ce = true ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n" } : {};
function le() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var n2 = e[0], r2 = [], o2 = 1, s2 = e.length; o2 < s2; o2 += 1)
    r2.push(e[o2]);
  return r2.forEach(function(e2) {
    n2 = n2.replace(/%[a-z]/, e2);
  }), n2;
}
function ue(t) {
  for (var n2 = [], r2 = 1; r2 < arguments.length; r2++)
    n2[r2 - 1] = arguments[r2];
  return false ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n2.length > 0 ? " Args: ".concat(n2.join(", ")) : "")) : new Error(le.apply(void 0, __spreadArray([ce[t]], n2, false)).trim());
}
var pe = function() {
  function e(e2) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2;
  }
  return e.prototype.indexOfGroup = function(e2) {
    for (var t = 0, n2 = 0; n2 < e2; n2++)
      t += this.groupSizes[n2];
    return t;
  }, e.prototype.insertRules = function(e2, t) {
    if (e2 >= this.groupSizes.length) {
      for (var n2 = this.groupSizes, r2 = n2.length, o2 = r2; e2 >= o2; )
        if ((o2 <<= 1) < 0)
          throw ue(16, "".concat(e2));
      this.groupSizes = new Uint32Array(o2), this.groupSizes.set(n2), this.length = o2;
      for (var s2 = r2; s2 < o2; s2++)
        this.groupSizes[s2] = 0;
    }
    for (var i2 = this.indexOfGroup(e2 + 1), a2 = (s2 = 0, t.length); s2 < a2; s2++)
      this.tag.insertRule(i2, t[s2]) && (this.groupSizes[e2]++, i2++);
  }, e.prototype.clearGroup = function(e2) {
    if (e2 < this.length) {
      var t = this.groupSizes[e2], n2 = this.indexOfGroup(e2), r2 = n2 + t;
      this.groupSizes[e2] = 0;
      for (var o2 = n2; o2 < r2; o2++)
        this.tag.deleteRule(n2);
    }
  }, e.prototype.getGroup = function(e2) {
    var t = "";
    if (e2 >= this.length || 0 === this.groupSizes[e2])
      return t;
    for (var n2 = this.groupSizes[e2], r2 = this.indexOfGroup(e2), o2 = r2 + n2, s2 = r2; s2 < o2; s2++)
      t += "".concat(this.tag.getRule(s2)).concat("/*!sc*/\n");
    return t;
  }, e;
}();
var de = /* @__PURE__ */ new Map();
var he = /* @__PURE__ */ new Map();
var fe = 1;
var me = function(e) {
  if (de.has(e))
    return de.get(e);
  for (; he.has(fe); )
    fe++;
  var t = fe++;
  if ((0 | t) < 0 || t > 1073741824)
    throw ue(16, "".concat(t));
  return de.set(e, t), he.set(t, e), t;
};
var ye = function(e, t) {
  de.set(e, t), he.set(t, e);
};
var ve = "style[".concat(v, "][").concat("data-styled-version", '="').concat("6.0.0-rc.1", '"]');
var ge = new RegExp("^".concat(v, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'));
var Se = function(e, t, n2) {
  for (var r2, o2 = n2.split(","), s2 = 0, i2 = o2.length; s2 < i2; s2++)
    (r2 = o2[s2]) && e.registerName(t, r2);
};
var we = function(e, t) {
  for (var n2, r2 = (null !== (n2 = t.textContent) && void 0 !== n2 ? n2 : "").split("/*!sc*/\n"), o2 = [], s2 = 0, i2 = r2.length; s2 < i2; s2++) {
    var a2 = r2[s2].trim();
    if (a2) {
      var c2 = a2.match(ge);
      if (c2) {
        var l2 = 0 | parseInt(c2[1], 10), u2 = c2[2];
        0 !== l2 && (ye(u2, l2), Se(e, u2, c2[3]), e.getTag().insertRules(l2, o2)), o2.length = 0;
      } else
        o2.push(a2);
    }
  }
};
function be() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}
var Ee = function(e) {
  var t = document.head, n2 = e || t, r2 = document.createElement("style"), o2 = function(e2) {
    for (var t2 = e2.childNodes, n3 = t2.length; n3 >= 0; n3--) {
      var r3 = t2[n3];
      if (r3 && 1 === r3.nodeType && r3.hasAttribute(v))
        return r3;
    }
  }(n2), s2 = void 0 !== o2 ? o2.nextSibling : null;
  r2.setAttribute(v, "active"), r2.setAttribute("data-styled-version", "6.0.0-rc.1");
  var i2 = be();
  return i2 && r2.setAttribute("nonce", i2), n2.insertBefore(r2, s2), r2;
};
var Ne = function() {
  function e(e2) {
    this.element = Ee(e2), this.element.appendChild(document.createTextNode("")), this.sheet = function(e3) {
      if (e3.sheet)
        return e3.sheet;
      for (var t = document.styleSheets, n2 = 0, r2 = t.length; n2 < r2; n2++) {
        var o2 = t[n2];
        if (o2.ownerNode === e3)
          return o2;
      }
      throw ue(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(e2, t) {
    try {
      return this.sheet.insertRule(t, e2), this.length++, true;
    } catch (e3) {
      return false;
    }
  }, e.prototype.deleteRule = function(e2) {
    this.sheet.deleteRule(e2), this.length--;
  }, e.prototype.getRule = function(e2) {
    var t = this.sheet.cssRules[e2];
    return t && t.cssText ? t.cssText : "";
  }, e;
}();
var Pe = function() {
  function e(e2) {
    this.element = Ee(e2), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(e2, t) {
    if (e2 <= this.length && e2 >= 0) {
      var n2 = document.createTextNode(t);
      return this.element.insertBefore(n2, this.nodes[e2] || null), this.length++, true;
    }
    return false;
  }, e.prototype.deleteRule = function(e2) {
    this.element.removeChild(this.nodes[e2]), this.length--;
  }, e.prototype.getRule = function(e2) {
    return e2 < this.length ? this.nodes[e2].textContent : "";
  }, e;
}();
var _e = function() {
  function e(e2) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(e2, t) {
    return e2 <= this.length && (this.rules.splice(e2, 0, t), this.length++, true);
  }, e.prototype.deleteRule = function(e2) {
    this.rules.splice(e2, 1), this.length--;
  }, e.prototype.getRule = function(e2) {
    return e2 < this.length ? this.rules[e2] : "";
  }, e;
}();
var Ce = S;
var Ie = { isServer: !S, useCSSOMInjection: !w };
var Ae = function() {
  function e(e2, n2, r2) {
    void 0 === e2 && (e2 = C), void 0 === n2 && (n2 = {}), this.options = __assign(__assign({}, Ie), e2), this.gs = n2, this.names = new Map(r2), this.server = !!e2.isServer, !this.server && S && Ce && (Ce = false, function(e3) {
      for (var t = document.querySelectorAll(ve), n3 = 0, r3 = t.length; n3 < r3; n3++) {
        var o2 = t[n3];
        o2 && "active" !== o2.getAttribute(v) && (we(e3, o2), o2.parentNode && o2.parentNode.removeChild(o2));
      }
    }(this));
  }
  return e.registerId = function(e2) {
    return me(e2);
  }, e.prototype.reconstructWithOptions = function(n2, r2) {
    return void 0 === r2 && (r2 = true), new e(__assign(__assign({}, this.options), n2), this.gs, r2 && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(e2) {
    return this.gs[e2] = (this.gs[e2] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (e2 = function(e3) {
      var t = e3.useCSSOMInjection, n2 = e3.target;
      return e3.isServer ? new _e(n2) : t ? new Ne(n2) : new Pe(n2);
    }(this.options), new pe(e2)));
    var e2;
  }, e.prototype.hasNameForId = function(e2, t) {
    return this.names.has(e2) && this.names.get(e2).has(t);
  }, e.prototype.registerName = function(e2, t) {
    if (me(e2), this.names.has(e2))
      this.names.get(e2).add(t);
    else {
      var n2 = /* @__PURE__ */ new Set();
      n2.add(t), this.names.set(e2, n2);
    }
  }, e.prototype.insertRules = function(e2, t, n2) {
    this.registerName(e2, t), this.getTag().insertRules(me(e2), n2);
  }, e.prototype.clearNames = function(e2) {
    this.names.has(e2) && this.names.get(e2).clear();
  }, e.prototype.clearRules = function(e2) {
    this.getTag().clearGroup(me(e2)), this.clearNames(e2);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e.prototype.toString = function() {
    return function(e2) {
      for (var t = e2.getTag(), n2 = t.length, r2 = "", o2 = function(n3) {
        var o3 = function(e3) {
          return he.get(e3);
        }(n3);
        if (void 0 === o3)
          return "continue";
        var s3 = e2.names.get(o3), i2 = t.getGroup(n3);
        if (void 0 === s3 || 0 === i2.length)
          return "continue";
        var a2 = "".concat(v, ".g").concat(n3, '[id="').concat(o3, '"]'), c2 = "";
        void 0 !== s3 && s3.forEach(function(e3) {
          e3.length > 0 && (c2 += "".concat(e3, ","));
        }), r2 += "".concat(i2).concat(a2, '{content:"').concat(c2, '"}').concat("/*!sc*/\n");
      }, s2 = 0; s2 < n2; s2++)
        o2(s2);
      return r2;
    }(this);
  }, e;
}();
var Oe = /&/g;
var De = /^\s*\/\/.*$/gm;
function Re(e, t) {
  return e.map(function(e2) {
    return "rule" === e2.type && (e2.value = "".concat(t, " ").concat(e2.value), e2.value = e2.value.replaceAll(",", ",".concat(t, " ")), e2.props = e2.props.map(function(e3) {
      return "".concat(t, " ").concat(e3);
    })), Array.isArray(e2.children) && "@keyframes" !== e2.type && (e2.children = Re(e2.children, t)), e2;
  });
}
function Te(e) {
  var t, n2, r2, o2 = void 0 === e ? C : e, s2 = o2.options, i2 = void 0 === s2 ? C : s2, a2 = o2.plugins, c2 = void 0 === a2 ? _ : a2, l2 = function(e2, r3, o3) {
    return o3 === n2 || o3.startsWith(n2) && o3.endsWith(n2) && o3.replaceAll(n2, "").length > 0 ? ".".concat(t) : e2;
  }, u2 = c2.slice();
  i2.prefix && u2.unshift(prefixer), u2.push(function(e2) {
    e2.type === RULESET && e2.value.includes("&") && (e2.props[0] = e2.props[0].replace(Oe, n2).replace(r2, l2));
  }, stringify);
  var y = function(e2, o3, s3, a3) {
    void 0 === o3 && (o3 = ""), void 0 === s3 && (s3 = ""), void 0 === a3 && (a3 = "&"), t = a3, n2 = o3, r2 = new RegExp("\\".concat(n2, "\\b"), "g");
    var c3 = e2.replace(De, ""), l3 = compile(s3 || o3 ? "".concat(s3, " ").concat(o3, " { ").concat(c3, " }") : c3);
    return i2.namespace && (l3 = Re(l3, i2.namespace)), function(e3, t2) {
      for (var n3 = [], r3 = 0, o4 = void 0; r3 < e3.length; r3 += 1)
        (o4 = t2(e3[r3], r3, e3, t2)) && n3.push(o4);
      return n3;
    }(l3, middleware(u2));
  };
  return y.hash = c2.length ? c2.reduce(function(e2, t2) {
    return t2.name || ue(15), V(e2, t2.name);
  }, 5381).toString() : "", y;
}
var je = new Ae();
var xe = Te();
var ke = import_react.default.createContext({ shouldForwardProp: void 0, styleSheet: je, stylis: xe });
var Ve = ke.Consumer;
var Me = import_react.default.createContext(void 0);
function Fe() {
  return (0, import_react.useContext)(ke);
}
function Be(e) {
  var t = (0, import_react.useState)(e.stylisPlugins), r2 = t[0], a2 = t[1], c2 = Fe().styleSheet, l2 = (0, import_react.useMemo)(function() {
    var t2 = c2;
    return e.sheet ? t2 = e.sheet : e.target && (t2 = t2.reconstructWithOptions({ target: e.target }, false)), e.disableCSSOMInjection && (t2 = t2.reconstructWithOptions({ useCSSOMInjection: false })), t2;
  }, [e.disableCSSOMInjection, e.sheet, e.target, c2]), p = (0, import_react.useMemo)(function() {
    return Te({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: r2 });
  }, [e.enableVendorPrefixes, e.namespace, r2]);
  return (0, import_react.useEffect)(function() {
    (0, import_shallowequal.default)(r2, e.stylisPlugins) || a2(e.stylisPlugins);
  }, [e.stylisPlugins]), import_react.default.createElement(ke.Provider, { value: { shouldForwardProp: e.shouldForwardProp, styleSheet: l2, stylis: p } }, import_react.default.createElement(Me.Provider, { value: p }, e.children));
}
var $e = function() {
  function e(e2, t) {
    var n2 = this;
    this.inject = function(e3, t2) {
      void 0 === t2 && (t2 = xe);
      var r2 = n2.name + t2.hash;
      e3.hasNameForId(n2.id, r2) || e3.insertRules(n2.id, r2, t2(n2.rules, r2, "@keyframes"));
    }, this.toString = function() {
      throw ue(12, String(n2.name));
    }, this.name = e2, this.id = "sc-keyframes-".concat(e2), this.rules = t;
  }
  return e.prototype.getName = function(e2) {
    return void 0 === e2 && (e2 = xe), this.name + e2.hash;
  }, e;
}();
var ze = function(e) {
  return e >= "A" && e <= "Z";
};
function Le(e) {
  for (var t = "", n2 = 0; n2 < e.length; n2++) {
    var r2 = e[n2];
    if (1 === n2 && "-" === r2 && "-" === e[0])
      return e;
    ze(r2) ? t += "-" + r2.toLowerCase() : t += r2;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Ge = function(e) {
  return null == e || false === e || "" === e;
};
var Ye = function(t) {
  var n2, r2, o2 = [];
  for (var s2 in t) {
    var i2 = t[s2];
    t.hasOwnProperty(s2) && !Ge(i2) && (Array.isArray(i2) && i2.isCss || ne(i2) ? o2.push("".concat(Le(s2), ":"), i2, ";") : ie(i2) ? o2.push.apply(o2, __spreadArray(__spreadArray(["".concat(s2, " {")], Ye(i2), false), ["}"], false)) : o2.push("".concat(Le(s2), ": ").concat((n2 = s2, null == (r2 = i2) || "boolean" == typeof r2 || "" === r2 ? "" : "number" != typeof r2 || 0 === r2 || n2 in unitlessKeys || n2.startsWith("--") ? String(r2).trim() : "".concat(r2, "px")), ";")));
  }
  return o2;
};
function We(e, t, n2, r2) {
  if (Ge(e))
    return [];
  if (re(e))
    return [".".concat(e.styledComponentId)];
  if (ne(e)) {
    if (!ne(s2 = e) || s2.prototype && s2.prototype.isReactComponent || !t)
      return [e];
    var o2 = e(t);
    return "object" != typeof o2 || Array.isArray(o2) || o2 instanceof $e || ie(o2) || null === o2 || console.error("".concat(B(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), We(o2, t, n2, r2);
  }
  var s2;
  return e instanceof $e ? n2 ? (e.inject(n2, r2), [e.getName(r2)]) : [e] : ie(e) ? Ye(e) : Array.isArray(e) ? e.flatMap(function(e2) {
    return We(e2, t, n2, r2);
  }) : [e.toString()];
}
function qe(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n2 = e[t];
    if (ne(n2) && !re(n2))
      return false;
  }
  return true;
}
var He = M("6.0.0-rc.1");
var Ue = function() {
  function e(e2, t, n2) {
    this.rules = e2, this.staticRulesId = "", this.isStatic = false, this.componentId = t, this.baseHash = V(He, t), this.baseStyle = n2, Ae.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(e2, t, n2) {
    var r2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t, n2) : "";
    if (this.isStatic && !n2.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
        r2 = oe(r2, this.staticRulesId);
      else {
        var o2 = se(We(this.rules, e2, t, n2)), s2 = x(V(this.baseHash, o2) >>> 0);
        if (!t.hasNameForId(this.componentId, s2)) {
          var i2 = n2(o2, ".".concat(s2), void 0, this.componentId);
          t.insertRules(this.componentId, s2, i2);
        }
        r2 = oe(r2, s2), this.staticRulesId = s2;
      }
    else {
      for (var a2 = V(this.baseHash, n2.hash), c2 = "", l2 = 0; l2 < this.rules.length; l2++) {
        var u2 = this.rules[l2];
        if ("string" == typeof u2)
          c2 += u2, a2 = V(a2, u2);
        else if (u2) {
          var p = se(We(u2, e2, t, n2));
          a2 = V(a2, p), c2 += p;
        }
      }
      if (c2) {
        var d = x(a2 >>> 0);
        t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n2(c2, ".".concat(d), void 0, this.componentId)), r2 = oe(r2, d);
      }
    }
    return r2;
  }, e;
}();
var Je = import_react.default.createContext(void 0);
var Xe = Je.Consumer;
function Ze() {
  return (0, import_react.useContext)(Je);
}
function Ke(e) {
  var r2 = Ze(), o2 = (0, import_react.useMemo)(function() {
    return function(e2, n2) {
      if (!e2)
        throw ue(14);
      if (ne(e2)) {
        var r3 = e2(n2);
        if (null === r3 || Array.isArray(r3) || "object" != typeof r3)
          throw ue(7);
        return r3;
      }
      if (Array.isArray(e2) || "object" != typeof e2)
        throw ue(8);
      return n2 ? __assign(__assign({}, n2), e2) : e2;
    }(e.theme, r2);
  }, [e.theme, r2]);
  return e.children ? import_react.default.createElement(Je.Provider, { value: o2 }, e.children) : null;
}
var Qe = {};
function et(e, r2, o2) {
  var s2 = re(e), i2 = e, a2 = !$(e), u2 = r2.attrs, p = void 0 === u2 ? _ : u2, d = r2.componentId, h = void 0 === d ? function(e2, t) {
    var n2 = "string" != typeof e2 ? "sc" : R(e2);
    Qe[n2] = (Qe[n2] || 0) + 1;
    var r3 = "".concat(n2, "-").concat(F("6.0.0-rc.1" + n2 + Qe[n2]));
    return t ? "".concat(t, "-").concat(r3) : r3;
  }(r2.displayName, r2.parentComponentId) : d, f = r2.displayName, m = void 0 === f ? function(e2) {
    return $(e2) ? "styled.".concat(e2) : "Styled(".concat(B(e2), ")");
  }(e) : f, y = r2.displayName && r2.componentId ? "".concat(R(r2.displayName), "-").concat(r2.componentId) : r2.componentId || h, v2 = s2 && i2.attrs ? i2.attrs.concat(p).filter(Boolean) : p, g2 = r2.shouldForwardProp;
  if (s2 && i2.shouldForwardProp) {
    var S2 = i2.shouldForwardProp;
    if (r2.shouldForwardProp) {
      var w2 = r2.shouldForwardProp;
      g2 = function(e2, t) {
        return S2(e2, t) && w2(e2, t);
      };
    } else
      g2 = S2;
  }
  var b2 = new Ue(o2, y, s2 ? i2.componentStyle : void 0), E2 = b2.isStatic && 0 === p.length;
  function N2(e2, n2) {
    return function(e3, n3, r3, o3) {
      var s3 = e3.attrs, i3 = e3.componentStyle, a3 = e3.defaultProps, u3 = e3.foldedComponentIds, p2 = e3.styledComponentId, d2 = e3.target, h2 = Ze(), f2 = Fe(), m2 = e3.shouldForwardProp || f2.shouldForwardProp;
      (0, import_react.useDebugValue)(p2);
      var y2 = function(e4, n4, r4) {
        for (var o4, s4 = __assign(__assign({}, n4), { className: void 0, theme: r4 }), i4 = 0; i4 < e4.length; i4 += 1) {
          var a4 = ne(o4 = e4[i4]) ? o4(s4) : o4;
          for (var c2 in a4)
            s4[c2] = "className" === c2 ? oe(s4[c2], a4[c2]) : "style" === c2 ? __assign(__assign({}, s4[c2]), a4[c2]) : a4[c2];
        }
        return n4.className && (s4.className = oe(s4.className, n4.className)), s4;
      }(s3, n3, I(n3, h2, a3) || C), v3 = y2.as || d2, g3 = {};
      for (var S3 in y2)
        void 0 === y2[S3] || "$" === S3[0] || "as" === S3 || "theme" === S3 || ("forwardedAs" === S3 ? g3.as = y2.forwardedAs : m2 && !m2(S3, v3) || (g3[S3] = y2[S3]));
      var w3 = function(e4, t, n4) {
        var r4 = Fe(), o4 = e4.generateAndInjectStyles(t ? C : n4, r4.styleSheet, r4.stylis);
        return (0, import_react.useDebugValue)(o4), o4;
      }(i3, o3, y2);
      !o3 && e3.warnTooManyClasses && e3.warnTooManyClasses(w3);
      var b3 = oe(u3, p2);
      return w3 && (b3 += " " + w3), y2.className && (b3 += " " + y2.className), g3[$(v3) && !A.has(v3) ? "class" : "className"] = b3, g3.ref = r3, (0, import_react.createElement)(v3, g3);
    }(O2, e2, n2, E2);
  }
  N2.displayName = m;
  var O2 = import_react.default.forwardRef(N2);
  return O2.attrs = v2, O2.componentStyle = b2, O2.displayName = m, O2.shouldForwardProp = g2, O2.foldedComponentIds = s2 ? oe(i2.foldedComponentIds, i2.styledComponentId) : "", O2.styledComponentId = y, O2.target = s2 ? i2.target : e, Object.defineProperty(O2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(e2) {
    this._foldedDefaultProps = s2 ? function(e3) {
      for (var t = [], n2 = 1; n2 < arguments.length; n2++)
        t[n2 - 1] = arguments[n2];
      for (var r3 = 0, o3 = t; r3 < o3.length; r3++)
        ae(e3, o3[r3], true);
      return e3;
    }({}, i2.defaultProps, e2) : e2;
  } }), P(m, y), O2.warnTooManyClasses = function(e2, t) {
    var n2 = {}, r3 = false;
    return function(o3) {
      if (!r3 && (n2[o3] = true, Object.keys(n2).length >= 200)) {
        var s3 = t ? ' with the id of "'.concat(t, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(e2).concat(s3, ".\n") + "Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), r3 = true, n2 = {};
      }
    };
  }(m, y), Object.defineProperty(O2, "toString", { value: function() {
    return ".".concat(O2.styledComponentId);
  } }), a2 && te(O2, e, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), O2;
}
function tt(e, t) {
  for (var n2 = [e[0]], r2 = 0, o2 = t.length; r2 < o2; r2 += 1)
    n2.push(t[r2], e[r2 + 1]);
  return n2;
}
var nt = function(e) {
  return Object.assign(e, { isCss: true });
};
function rt(t) {
  for (var n2 = [], r2 = 1; r2 < arguments.length; r2++)
    n2[r2 - 1] = arguments[r2];
  if (ne(t) || ie(t)) {
    var o2 = t;
    return nt(We(tt(_, __spreadArray([o2], n2, true))));
  }
  var s2 = t;
  return 0 === n2.length && 1 === s2.length && "string" == typeof s2[0] ? We(s2) : nt(We(tt(s2, n2)));
}
function ot(n2, r2, o2) {
  if (void 0 === o2 && (o2 = C), !r2)
    throw ue(1, r2);
  var s2 = function(t) {
    for (var s3 = [], i2 = 1; i2 < arguments.length; i2++)
      s3[i2 - 1] = arguments[i2];
    return n2(r2, o2, rt.apply(void 0, __spreadArray([t], s3, false)));
  };
  return s2.attrs = function(e) {
    return ot(n2, r2, __assign(__assign({}, o2), { attrs: Array.prototype.concat(o2.attrs, e).filter(Boolean) }));
  }, s2.withConfig = function(e) {
    return ot(n2, r2, __assign(__assign({}, o2), e));
  }, s2;
}
var st = function(e) {
  return ot(et, e);
};
var it = st;
A.forEach(function(e) {
  it[e] = st(e);
});
var at = function() {
  function e(e2, t) {
    this.rules = e2, this.componentId = t, this.isStatic = qe(e2), Ae.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(e2, t, n2, r2) {
    var o2 = r2(se(We(this.rules, t, n2, r2)), ""), s2 = this.componentId + e2;
    n2.insertRules(s2, s2, o2);
  }, e.prototype.removeStyles = function(e2, t) {
    t.clearRules(this.componentId + e2);
  }, e.prototype.renderStyles = function(e2, t, n2, r2) {
    e2 > 2 && Ae.registerId(this.componentId + e2), this.removeStyles(e2, n2), this.createStyles(e2, t, n2, r2);
  }, e;
}();
function ct(r2) {
  for (var o2 = [], s2 = 1; s2 < arguments.length; s2++)
    o2[s2 - 1] = arguments[s2];
  var i2 = rt.apply(void 0, __spreadArray([r2], o2, false)), a2 = "sc-global-".concat(F(JSON.stringify(i2))), c2 = new at(i2, a2);
  P(a2);
  var l2 = function(e) {
    var t = Fe(), r3 = Ze(), o3 = import_react.default.useRef(t.styleSheet.allocateGSInstance(a2)).current;
    return import_react.default.Children.count(e.children) && console.warn("The global style component ".concat(a2, " was given child JSX. createGlobalStyle does not render children.")), i2.some(function(e2) {
      return "string" == typeof e2 && -1 !== e2.indexOf("@import");
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), t.styleSheet.server && u2(o3, e, t.styleSheet, r3, t.stylis), (import_react.default.useInsertionEffect || import_react.default.useLayoutEffect)(function() {
      if (!t.styleSheet.server)
        return u2(o3, e, t.styleSheet, r3, t.stylis), function() {
          return c2.removeStyles(o3, t.styleSheet);
        };
    }, [o3, e, t.styleSheet, r3, t.stylis]), null;
  };
  function u2(e, n2, r3, o3, s3) {
    if (c2.isStatic)
      c2.renderStyles(e, b, r3, s3);
    else {
      var i3 = __assign(__assign({}, n2), { theme: I(n2, o3, l2.defaultProps) });
      c2.renderStyles(e, i3, r3, s3);
    }
  }
  return import_react.default.memo(l2);
}
function lt(t) {
  for (var n2 = [], r2 = 1; r2 < arguments.length; r2++)
    n2[r2 - 1] = arguments[r2];
  "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var o2 = se(rt.apply(void 0, __spreadArray([t], n2, false))), s2 = F(o2);
  return new $e(s2, o2);
}
function ut(e) {
  var r2 = import_react.default.forwardRef(function(r3, o2) {
    var s2 = I(r3, Ze(), e.defaultProps);
    return void 0 === s2 && console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'.concat(B(e), '"')), import_react.default.createElement(e, __assign({}, r3, { theme: s2, ref: o2 }));
  });
  return r2.displayName = "WithTheme(".concat(B(e), ")"), te(r2, e);
}
var pt = function() {
  function e() {
    var e2 = this;
    this._emitSheetCSS = function() {
      var t = e2.instance.toString(), n2 = be(), r2 = se([n2 && 'nonce="'.concat(n2, '"'), "".concat(v, '="true"'), "".concat("data-styled-version", '="').concat("6.0.0-rc.1", '"')].filter(Boolean), " ");
      return "<style ".concat(r2, ">").concat(t, "</style>");
    }, this.getStyleTags = function() {
      if (e2.sealed)
        throw ue(2);
      return e2._emitSheetCSS();
    }, this.getStyleElement = function() {
      var r2;
      if (e2.sealed)
        throw ue(2);
      var o2 = ((r2 = {})[v] = "", r2["data-styled-version"] = "6.0.0-rc.1", r2.dangerouslySetInnerHTML = { __html: e2.instance.toString() }, r2), s2 = be();
      return s2 && (o2.nonce = s2), [import_react.default.createElement("style", __assign({}, o2, { key: "sc-0-0" }))];
    }, this.seal = function() {
      e2.sealed = true;
    }, this.instance = new Ae({ isServer: true }), this.sealed = false;
  }
  return e.prototype.collectStyles = function(e2) {
    if (this.sealed)
      throw ue(2);
    return import_react.default.createElement(Be, { sheet: this.instance }, e2);
  }, e.prototype.interleaveWithNodeStream = function(e2) {
    throw ue(3);
  }, e;
}();
var dt = { StyleSheet: Ae, mainSheet: je };
"undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");
var ht = "__sc-".concat(v, "__");
"undefined" != typeof window && (window[ht] || (window[ht] = 0), 1 === window[ht] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window[ht] += 1);
export {
  pt as ServerStyleSheet,
  Ve as StyleSheetConsumer,
  ke as StyleSheetContext,
  Be as StyleSheetManager,
  Xe as ThemeConsumer,
  Je as ThemeContext,
  Ke as ThemeProvider,
  dt as __PRIVATE__,
  ct as createGlobalStyle,
  rt as css,
  it as default,
  re as isStyledComponent,
  lt as keyframes,
  it as styled,
  Ze as useTheme,
  g as version,
  ut as withTheme
};
//# sourceMappingURL=styled-components.js.map
