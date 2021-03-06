! function (e) {
    function n(e) {
        return new RegExp("^" + e + "$")
    }

    function r(e, i) {
        for (var t = Array.prototype.slice.call(arguments).splice(2), a = e.split("."), s = a.pop(), n = 0; n < a.length; n++) i = i[a[n]];
        return i[s].apply(this, t)
    }
    var i = [],
        t = {
            options: {
                prependExistingHelpBlock: !1,
                sniffHtml: !0,
                preventSubmit: !0,
                submitError: !1,
                submitSuccess: !1,
                semanticallyStrict: !1,
                autoAdd: {
                    helpBlocks: !1
                },
                filter: function () {
                    return !0
                }
            },
            methods: {
                init: function (n) {
                    var r = e.extend(!0, {}, t);
                    r.options = e.extend(!0, r.options, n);
                    var o = this,
                        l = e.unique(o.map(function () {
                            return e(this).parents("form")[0]
                        }).toArray());
                    return e(l).bind("submit", function (i) {
                        var t = e(this),
                            a = 0,
                            s = t.find("input,textarea,select").not("[type=submit],[type=image]").filter(r.options.filter);
                        s.trigger("submit.validation").trigger("validationLostFocus.validation"), s.each(function (i, t) {
                            var s = e(t),
                                n = s.parents(".control-group").first();
                            n.hasClass("has-warning") && (n.removeClass("has-warning").addClass("has-error"), a++)
                        }), s.trigger("validationLostFocus.validation"), a ? (r.options.preventSubmit && i.preventDefault(), t.addClass("has-error"), e.isFunction(r.options.submitError) && r.options.submitError(t, i, s.jqBootstrapValidation("collectErrors", !0))) : (t.removeClass("has-error"), e.isFunction(r.options.submitSuccess) && r.options.submitSuccess(t, i))
                    }), this.each(function () {
                        var t = e(this),
                            n = t.parents(".control-group").first(),
                            o = n.find(".help-block").first(),
                            l = t.parents("form").first(),
                            d = [];
                        if (!o.length && r.options.autoAdd && r.options.autoAdd.helpBlocks && (o = e('<div class="help-block" />'), n.find(".controls").append(o), i.push(o[0])), r.options.sniffHtml) {
                            var u = "";
                            if (void 0 !== t.attr("pattern") && (u = "Not in the expected format<!-- data-validation-pattern-message to override -->", t.data("validationPatternMessage") && (u = t.data("validationPatternMessage")), t.data("validationPatternMessage", u), t.data("validationPatternRegex", t.attr("pattern"))), void 0 !== t.attr("max") || void 0 !== t.attr("aria-valuemax")) {
                                var h = t.attr(void 0 !== t.attr("max") ? "max" : "aria-valuemax");
                                u = "Too high: Maximum of '" + h + "'<!-- data-validation-max-message to override -->", t.data("validationMaxMessage") && (u = t.data("validationMaxMessage")), t.data("validationMaxMessage", u), t.data("validationMaxMax", h)
                            }
                            if (void 0 !== t.attr("min") || void 0 !== t.attr("aria-valuemin")) {
                                var c = t.attr(void 0 !== t.attr("min") ? "min" : "aria-valuemin");
                                u = "Too low: Minimum of '" + c + "'<!-- data-validation-min-message to override -->", t.data("validationMinMessage") && (u = t.data("validationMinMessage")), t.data("validationMinMessage", u), t.data("validationMinMin", c)
                            }
                            void 0 !== t.attr("maxlength") && (u = "Too long: Maximum of '" + t.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->", t.data("validationMaxlengthMessage") && (u = t.data("validationMaxlengthMessage")), t.data("validationMaxlengthMessage", u), t.data("validationMaxlengthMaxlength", t.attr("maxlength"))), void 0 !== t.attr("minlength") && (u = "Too short: Minimum of '" + t.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->", t.data("validationMinlengthMessage") && (u = t.data("validationMinlengthMessage")), t.data("validationMinlengthMessage", u), t.data("validationMinlengthMinlength", t.attr("minlength"))), (void 0 !== t.attr("required") || void 0 !== t.attr("aria-required")) && (u = r.builtInValidators.required.message, t.data("validationRequiredMessage") && (u = t.data("validationRequiredMessage")), t.data("validationRequiredMessage", u)), void 0 !== t.attr("type") && "number" === t.attr("type").toLowerCase() && (u = r.builtInValidators.number.message, t.data("validationNumberMessage") && (u = t.data("validationNumberMessage")), t.data("validationNumberMessage", u)), void 0 !== t.attr("type") && "email" === t.attr("type").toLowerCase() && (u = "Not a valid email address<!-- data-validator-validemail-message to override -->", t.data("validationValidemailMessage") ? u = t.data("validationValidemailMessage") : t.data("validationEmailMessage") && (u = t.data("validationEmailMessage")), t.data("validationValidemailMessage", u)), void 0 !== t.attr("minchecked") && (u = "Not enough options checked; Minimum of '" + t.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->", t.data("validationMincheckedMessage") && (u = t.data("validationMincheckedMessage")), t.data("validationMincheckedMessage", u), t.data("validationMincheckedMinchecked", t.attr("minchecked"))), void 0 !== t.attr("maxchecked") && (u = "Too many options checked; Maximum of '" + t.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->", t.data("validationMaxcheckedMessage") && (u = t.data("validationMaxcheckedMessage")), t.data("validationMaxcheckedMessage", u), t.data("validationMaxcheckedMaxchecked", t.attr("maxchecked")))
                        }
                        void 0 !== t.data("validation") && (d = t.data("validation").split(",")), e.each(t.data(), function (e) {
                            var t = e.replace(/([A-Z])/g, ",$1").split(",");
                            "validation" === t[0] && t[1] && d.push(t[1])
                        });
                        var v = d,
                            f = [];
                        do e.each(d, function (e, i) {
                            d[e] = a(i)
                        }), d = e.unique(d), f = [], e.each(v, function (i, s) {
                            if (void 0 !== t.data("validation" + s + "Shortcut")) e.each(t.data("validation" + s + "Shortcut").split(","), function (e, i) {
                                f.push(i)
                            });
                            else if (r.builtInValidators[s.toLowerCase()]) {
                                var n = r.builtInValidators[s.toLowerCase()];
                                "shortcut" === n.type.toLowerCase() && e.each(n.shortcut.split(","), function (e, i) {
                                    i = a(i), f.push(i), d.push(i)
                                })
                            }
                        }), v = f; while (v.length > 0);
                        var m = {};
                        e.each(d, function (i, s) {
                            var n = t.data("validation" + s + "Message"),
                                o = void 0 !== n,
                                l = !1;
                            if (n = n ? n : "'" + s + "' validation failed <!-- Add attribute 'data-validation-" + s.toLowerCase() + "-message' to input to change this message -->", e.each(r.validatorTypes, function (i, r) {
                                    void 0 === m[i] && (m[i] = []), l || void 0 === t.data("validation" + s + a(r.name)) || (m[i].push(e.extend(!0, {
                                        name: a(r.name),
                                        message: n
                                    }, r.init(t, s))), l = !0)
                                }), !l && r.builtInValidators[s.toLowerCase()]) {
                                var d = e.extend(!0, {}, r.builtInValidators[s.toLowerCase()]);
                                o && (d.message = n);
                                var u = d.type.toLowerCase();
                                "shortcut" === u ? l = !0 : e.each(r.validatorTypes, function (i, n) {
                                    void 0 === m[i] && (m[i] = []), l || u !== i.toLowerCase() || (t.data("validation" + s + a(n.name), d[n.name.toLowerCase()]), m[u].push(e.extend(d, n.init(t, s))), l = !0)
                                })
                            }
                            l || e.error("Cannot find validation info for '" + s + "'")
                        }), o.data("original-contents", o.data("original-contents") ? o.data("original-contents") : o.html()), o.data("original-role", o.data("original-role") ? o.data("original-role") : o.attr("role")), n.data("original-classes", n.data("original-clases") ? n.data("original-classes") : n.attr("class")), t.data("original-aria-invalid", t.data("original-aria-invalid") ? t.data("original-aria-invalid") : t.attr("aria-invalid")), t.bind("validation.validation", function (i, a) {
                            var n = s(t),
                                o = [];
                            return e.each(m, function (i, s) {
                                (n || n.length || a && a.includeEmpty || r.validatorTypes[i].blockSubmit && a && a.submitting) && e.each(s, function (e, a) {
                                    r.validatorTypes[i].validate(t, n, a) && o.push(a.message)
                                })
                            }), o
                        }), t.bind("getValidators.validation", function () {
                            return m
                        }), t.bind("submit.validation", function () {
                            return t.triggerHandler("change.validation", {
                                submitting: !0
                            })
                        }), t.bind(["keyup", "focus", "blur", "click", "keydown", "keypress", "change"].join(".validation ") + ".validation", function (i, a) {
                            var d = s(t),
                                u = [];
                            n.find("input,textarea,select").each(function (i, s) {
                                var n = u.length;
                                if (e.each(e(s).triggerHandler("validation.validation", a), function (e, i) {
                                        u.push(i)
                                    }), u.length > n) e(s).attr("aria-invalid", "true");
                                else {
                                    var r = t.data("original-aria-invalid");
                                    e(s).attr("aria-invalid", void 0 !== r ? r : !1)
                                }
                            }), l.find("input,select,textarea").not(t).not('[name="' + t.attr("name") + '"]').trigger("validationLostFocus.validation"), u = e.unique(u.sort()), u.length ? (n.removeClass("has-success has-error").addClass("has-warning"), o.html(r.options.semanticallyStrict && 1 === u.length ? u[0] + (r.options.prependExistingHelpBlock ? o.data("original-contents") : "") : '<ul role="alert"><li>' + u.join("</li><li>") + "</li></ul>" + (r.options.prependExistingHelpBlock ? o.data("original-contents") : ""))) : (n.removeClass("has-warning has-error has-success"), d.length > 0 && n.addClass("has-success"), o.html(o.data("original-contents"))), "blur" === i.type && n.removeClass("has-success")
                        }), t.bind("validationLostFocus.validation", function () {
                            n.removeClass("has-success")
                        })
                    })
                },
                destroy: function () {
                    return this.each(function () {
                        var t = e(this),
                            a = t.parents(".control-group").first(),
                            s = a.find(".help-block").first();
                        t.unbind(".validation"), s.html(s.data("original-contents")), a.attr("class", a.data("original-classes")), t.attr("aria-invalid", t.data("original-aria-invalid")), s.attr("role", t.data("original-role")), i.indexOf(s[0]) > -1 && s.remove()
                    })
                },
                collectErrors: function () {
                    var t = {};
                    return this.each(function (i, a) {
                        var s = e(a),
                            n = s.attr("name"),
                            r = s.triggerHandler("validation.validation", {
                                includeEmpty: !0
                            });
                        t[n] = e.extend(!0, r, t[n])
                    }), e.each(t, function (e, i) {
                        0 === i.length && delete t[e]
                    }), t
                },
                hasErrors: function () {
                    var i = [];
                    return this.each(function (t, a) {
                        i = i.concat(e(a).triggerHandler("getValidators.validation") ? e(a).triggerHandler("validation.validation", {
                            submitting: !0
                        }) : [])
                    }), i.length > 0
                },
                override: function (i) {
                    t = e.extend(!0, t, i)
                }
            },
            validatorTypes: {
                callback: {
                    name: "callback",
                    init: function (e, i) {
                        return {
                            validatorName: i,
                            callback: e.data("validation" + i + "Callback"),
                            lastValue: e.val(),
                            lastValid: !0,
                            lastFinished: !0
                        }
                    },
                    validate: function (e, i, t) {
                        if (t.lastValue === i && t.lastFinished) return !t.lastValid;
                        if (t.lastFinished === !0) {
                            t.lastValue = i, t.lastValid = !0, t.lastFinished = !1;
                            var a = t,
                                s = e;
                            r(t.callback, window, e, i, function (e) {
                                a.lastValue === e.value && (a.lastValid = e.valid, e.message && (a.message = e.message), a.lastFinished = !0, s.data("validation" + a.validatorName + "Message", a.message), setTimeout(function () {
                                    s.trigger("change.validation")
                                }, 1))
                            })
                        }
                        return !1
                    }
                },
                ajax: {
                    name: "ajax",
                    init: function (e, i) {
                        return {
                            validatorName: i,
                            url: e.data("validation" + i + "Ajax"),
                            lastValue: e.val(),
                            lastValid: !0,
                            lastFinished: !0
                        }
                    },
                    validate: function (i, t, a) {
                        return "" + a.lastValue == "" + t && a.lastFinished === !0 ? a.lastValid === !1 : (a.lastFinished === !0 && (a.lastValue = t, a.lastValid = !0, a.lastFinished = !1, e.ajax({
                            url: a.url,
                            data: "value=" + t + "&field=" + i.attr("name"),
                            dataType: "json",
                            success: function (e) {
                                "" + a.lastValue == "" + e.value && (a.lastValid = !!e.valid, e.message && (a.message = e.message), a.lastFinished = !0, i.data("validation" + a.validatorName + "Message", a.message), setTimeout(function () {
                                    i.trigger("change.validation")
                                }, 1))
                            },
                            failure: function () {
                                a.lastValid = !0, a.message = "ajax call failed", a.lastFinished = !0, i.data("validation" + a.validatorName + "Message", a.message), setTimeout(function () {
                                    i.trigger("change.validation")
                                }, 1)
                            }
                        })), !1)
                    }
                },
                regex: {
                    name: "regex",
                    init: function (e, i) {
                        return {
                            regex: n(e.data("validation" + i + "Regex"))
                        }
                    },
                    validate: function (e, i, t) {
                        return !t.regex.test(i) && !t.negative || t.regex.test(i) && t.negative
                    }
                },
                required: {
                    name: "required",
                    init: function () {
                        return {}
                    },
                    validate: function (e, i, t) {
                        return !(0 !== i.length || t.negative) || !!(i.length > 0 && t.negative)
                    },
                    blockSubmit: !0
                },
                match: {
                    name: "match",
                    init: function (e, i) {
                        var t = e.parents("form").first().find('[name="' + e.data("validation" + i + "Match") + '"]').first();
                        return t.bind("validation.validation", function () {
                            e.trigger("change.validation", {
                                submitting: !0
                            })
                        }), {
                            element: t
                        }
                    },
                    validate: function (e, i, t) {
                        return i !== t.element.val() && !t.negative || i === t.element.val() && t.negative
                    },
                    blockSubmit: !0
                },
                max: {
                    name: "max",
                    init: function (e, i) {
                        return {
                            max: e.data("validation" + i + "Max")
                        }
                    },
                    validate: function (e, i, t) {
                        return parseFloat(i, 10) > parseFloat(t.max, 10) && !t.negative || parseFloat(i, 10) <= parseFloat(t.max, 10) && t.negative
                    }
                },
                min: {
                    name: "min",
                    init: function (e, i) {
                        return {
                            min: e.data("validation" + i + "Min")
                        }
                    },
                    validate: function (e, i, t) {
                        return parseFloat(i) < parseFloat(t.min) && !t.negative || parseFloat(i) >= parseFloat(t.min) && t.negative
                    }
                },
                maxlength: {
                    name: "maxlength",
                    init: function (e, i) {
                        return {
                            maxlength: e.data("validation" + i + "Maxlength")
                        }
                    },
                    validate: function (e, i, t) {
                        return i.length > t.maxlength && !t.negative || i.length <= t.maxlength && t.negative
                    }
                },
                minlength: {
                    name: "minlength",
                    init: function (e, i) {
                        return {
                            minlength: e.data("validation" + i + "Minlength")
                        }
                    },
                    validate: function (e, i, t) {
                        return i.length < t.minlength && !t.negative || i.length >= t.minlength && t.negative
                    }
                },
                maxchecked: {
                    name: "maxchecked",
                    init: function (e, i) {
                        var t = e.parents("form").first().find('[name="' + e.attr("name") + '"]');
                        return t.bind("click.validation", function () {
                            e.trigger("change.validation", {
                                includeEmpty: !0
                            })
                        }), {
                            maxchecked: e.data("validation" + i + "Maxchecked"),
                            elements: t
                        }
                    },
                    validate: function (e, i, t) {
                        return t.elements.filter(":checked").length > t.maxchecked && !t.negative || t.elements.filter(":checked").length <= t.maxchecked && t.negative
                    },
                    blockSubmit: !0
                },
                minchecked: {
                    name: "minchecked",
                    init: function (e, i) {
                        var t = e.parents("form").first().find('[name="' + e.attr("name") + '"]');
                        return t.bind("click.validation", function () {
                            e.trigger("change.validation", {
                                includeEmpty: !0
                            })
                        }), {
                            minchecked: e.data("validation" + i + "Minchecked"),
                            elements: t
                        }
                    },
                    validate: function (e, i, t) {
                        return t.elements.filter(":checked").length < t.minchecked && !t.negative || t.elements.filter(":checked").length >= t.minchecked && t.negative
                    },
                    blockSubmit: !0
                }
            },
            builtInValidators: {
                email: {
                    name: "Email",
                    type: "shortcut",
                    shortcut: "validemail"
                },
                validemail: {
                    name: "Validemail",
                    type: "regex",
                    regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",
                    message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
                },
                passwordagain: {
                    name: "Passwordagain",
                    type: "match",
                    match: "password",
                    message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
                },
                positive: {
                    name: "Positive",
                    type: "shortcut",
                    shortcut: "number,positivenumber"
                },
                negative: {
                    name: "Negative",
                    type: "shortcut",
                    shortcut: "number,negativenumber"
                },
                number: {
                    name: "Number",
                    type: "regex",
                    regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
                    message: "Must be a number<!-- data-validator-number-message to override -->"
                },
                integer: {
                    name: "Integer",
                    type: "regex",
                    regex: "[+-]?\\d+",
                    message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
                },
                positivenumber: {
                    name: "Positivenumber",
                    type: "min",
                    min: 0,
                    message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
                },
                negativenumber: {
                    name: "Negativenumber",
                    type: "max",
                    max: 0,
                    message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
                },
                required: {
                    name: "Required",
                    type: "required",
                    message: "This is required<!-- data-validator-required-message to override -->"
                },
                checkone: {
                    name: "Checkone",
                    type: "minchecked",
                    minchecked: 1,
                    message: "Check at least one option<!-- data-validation-checkone-message to override -->"
                }
            }
        },
        a = function (e) {
            return e.toLowerCase().replace(/(^|\s)([a-z])/g, function (e, i, t) {
                return i + t.toUpperCase()
            })
        },
        s = function (i) {
            var t = i.val(),
                a = i.attr("type");
            return "checkbox" === a && (t = i.is(":checked") ? t : ""), "radio" === a && (t = e('input[name="' + i.attr("name") + '"]:checked').length > 0 ? t : ""), t
        };
    e.fn.jqBootstrapValidation = function (i) {
        return t.methods[i] ? t.methods[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? (e.error("Method " + i + " does not exist on jQuery.jqBootstrapValidation"), null) : t.methods.init.apply(this, arguments)
    }, e.jqBootstrapValidation = function () {
        e(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments)
    }
}(jQuery);