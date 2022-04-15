"use strict";
exports.id = 776;
exports.ids = [776];
exports.modules = {

/***/ 2461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */







class FullTestimonials extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderArrows", () => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "arrows",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "container",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            onClick: () => this.slider.slickNext(),
            className: "next cursor-pointer",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "pe-7s-angle-right"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            onClick: () => this.slider.slickPrev(),
            className: "prev cursor-pointer",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "pe-7s-angle-left"
            })
          })]
        })
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
      className: `testimonials ${this.props.withIMG ? "section-padding bg-img" : this.props.withCOLOR ? "section-padding back-color" : this.props.noPadding ? "" : "section-padding"} ${this.props.classText ? this.props.classText : ""}`,
      style: {
        backgroundImage: `${this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"}`
      },
      children: [this.props.showHead && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "col-lg-8 col-md-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "sec-head  text-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                className: "wow fadeIn",
                "data-wow-delay": ".5s",
                children: "Testimonials"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
                className: "wow color-font",
                children: "We love our clients from all over the world."
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "container-fluid position-re",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "row wow fadeInUp",
          "data-wow-delay": ".5s",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
            className: "col-lg-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), {
              className: "slic-item",
              ref: c => this.slider = c,
              dots: false,
              infinite: true,
              arrows: true,
              centerMode: true,
              autoplay: true,
              rows: 1,
              slidesToScroll: 1,
              slidesToShow: 3,
              responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }, {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }, {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }],
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      className: "author",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                          src: "/img/clients/1.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  children: "I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      className: "author",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                          src: "/img/clients/1.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  children: "I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      className: "author",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                          src: "/img/clients/1.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  children: "I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      className: "author",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
                          src: "/img/clients/1.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
                  children: "I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service."
                })]
              })]
            })
          })
        }), this.renderArrows()]
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullTestimonials);

/***/ }),

/***/ 2265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable @next/next/no-img-element */




const Intro3 = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("header", {
    className: "slider-stwo valign position-re",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "col-lg-5",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: "/img/slid/Banner1.jpg",
              alt: ""
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "col-lg-7 valign",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "cont",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
              className: "sub-title mb-5",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h6", {
                children: "Digital Consulting Agency"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h1", {
              className: "mb-10 fw-600",
              children: "Unique Business Consulting."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              children: ["We help our clients succeed by creating brand identities,", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), " digital experiences, and print materials."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                    className: "icon pe-7s-arc",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                      className: "bord"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "cont",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h6", {
                    children: "Branding"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
                    children: "It is a long established fact that a reader will be distracted."
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                    className: "icon pe-7s-help2",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                      className: "bord"
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "cont",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h6", {
                    children: "Marketing"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
                    children: "It is a long established fact that a reader will be distracted."
                  })]
                })]
              })]
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro3);

/***/ }),

/***/ 585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8073);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6882);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const Numbers2 = () => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    console.clear();
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("section", {
    className: "block-sec section-padding",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "number-sec",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "col-lg-3 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "item md-mb50",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "icon pe-7s-smile"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
                className: "custom-font",
                children: ["\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_2___default()), {
                  redraw: true,
                  end: 2400,
                  duration: "3",
                  children: ({
                    countUpRef,
                    start
                  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default()), {
                    onChange: start,
                    delayedCall: true,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                      className: "count",
                      ref: countUpRef
                    })
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Split__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                  className: "wow words chars splitting txt",
                  "data-splitting": true,
                  children: "Happy Clients"
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "col-lg-3 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "item md-mb50",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "icon pe-7s-portfolio"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
                className: "custom-font",
                children: ["\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_2___default()), {
                  redraw: true,
                  end: 133,
                  duration: "3",
                  children: ({
                    countUpRef,
                    start
                  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default()), {
                    onChange: start,
                    delayedCall: true,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                      className: "count",
                      ref: countUpRef
                    })
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Split__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                  className: "wow txt words chars splitting ",
                  "data-splitting": true,
                  children: "Compleate Projects"
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "col-lg-3 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "item sm-mb50",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "icon pe-7s-cloud-download"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
                className: "custom-font",
                children: ["\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_2___default()), {
                  redraw: true,
                  end: 254,
                  duration: "3",
                  children: ({
                    countUpRef,
                    start
                  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default()), {
                    onChange: start,
                    delayedCall: true,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                      className: "count",
                      ref: countUpRef
                    })
                  })
                }), "k"]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Split__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                  className: "wow txt words chars splitting",
                  "data-splitting": true,
                  children: "Files Downloaded"
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "col-lg-3 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "item",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                className: "icon pe-7s-medal"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
                className: "custom-font",
                children: ["\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_2___default()), {
                  redraw: true,
                  end: 46,
                  duration: "3",
                  children: ({
                    countUpRef,
                    start
                  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default()), {
                    onChange: start,
                    delayedCall: true,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                      className: "count",
                      ref: countUpRef
                    })
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Split__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                  className: "wow txt words chars splitting",
                  "data-splitting": true,
                  children: "Award Win"
                })
              })]
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Numbers2);

/***/ }),

/***/ 3731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Services2 = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "services section-padding position-re",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "sec-head  text-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Best Features"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h3", {
              className: "wow color-font",
              children: "We are a new digital product development agency"
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-4 wow fadeInUp",
          "data-wow-delay": ".3s",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "step-item xtop",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "icon pe-7s-gleam"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
              children: "Digital Marketing"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              children: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium."
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-4 wow fadeInUp",
          "data-wow-delay": ".6s",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "step-item xcolor",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "icon pe-7s-phone"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
              children: "Web & App Development"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              children: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium."
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-lg-4 wow fadeInUp",
          "data-wow-delay": ".9s",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "step-item xbottom",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
              className: "icon pe-7s-magic-wand"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h6", {
              children: "Graphic Design"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
              children: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium."
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "smore",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/about/about-dark",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
            children: "Discover More"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
          className: "fas fa-long-arrow-alt-right"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "line top left"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "line bottom right"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services2);

/***/ }),

/***/ 8893:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3877);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @next/next/no-css-tags */










swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation]);

const Works2 = ({
  sliderRef
}) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Head, {
      children: /*#__PURE__*/_jsx("link", {
        rel: "stylesheet",
        href: "/css/ionicons.min.css"
      })
    }), /*#__PURE__*/_jsx("section", {
      className: "work-carousel section-padding caroul position-re pb-0",
      children: /*#__PURE__*/_jsxs("div", {
        className: "container-fluid",
        children: [/*#__PURE__*/_jsx("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/_jsx("div", {
            className: "col-lg-8 col-md-10",
            children: /*#__PURE__*/_jsxs("div", {
              className: "sec-head  text-center",
              children: [/*#__PURE__*/_jsx("h6", {
                className: "wow fadeIn",
                "data-wow-delay": ".5s",
                children: "Latest Work"
              }), /*#__PURE__*/_jsxs("h3", {
                className: "wow color-font",
                children: ["Our Recent Web Design & ", /*#__PURE__*/_jsx("br", {}), " Some Past Projects."]
              })]
            })
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "row",
          children: /*#__PURE__*/_jsx("div", {
            className: "col-lg-12 no-padding",
            children: /*#__PURE__*/_jsx("div", {
              className: "swiper-container",
              children: /*#__PURE__*/_jsxs("div", {
                className: "swiper-container ",
                children: [!load ? /*#__PURE__*/_jsxs(Swiper, {
                  speed: 1000,
                  loop: true,
                  spaceBetween: 0,
                  breakpoints: {
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0
                    },
                    767: {
                      slidesPerView: 2,
                      spaceBetween: 0
                    },
                    991: {
                      slidesPerView: 3,
                      spaceBetween: 0
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 0
                    }
                  },
                  navigation: {
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current
                  },
                  onBeforeInit: swiper => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                  },
                  onSwiper: swiper => {
                    setTimeout(() => {
                      swiper.params.navigation.prevEl = navigationPrevRef.current;
                      swiper.params.navigation.nextEl = navigationNextRef.current;
                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();
                    });
                  },
                  className: "swiper-wrapper",
                  slidesPerView: 1,
                  children: [/*#__PURE__*/_jsx(SwiperSlide, {
                    className: "swiper-slide",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "content wow fadeInUp",
                      "data-wow-delay": ".3s",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "item-img bg-img wow imago",
                        style: {
                          backgroundImage: "url(/img/portfolio/curs/1.jpg)"
                        }
                      }), /*#__PURE__*/_jsxs("div", {
                        className: "cont bgbox",
                        children: [/*#__PURE__*/_jsx("h6", {
                          children: /*#__PURE__*/_jsx(Link, {
                            href: `/works2/works2-dark`,
                            children: /*#__PURE__*/_jsx("a", {
                              children: "art & illustration"
                            })
                          })
                        }), /*#__PURE__*/_jsx("h4", {
                          children: /*#__PURE__*/_jsx(Link, {
                            href: `/project-details2/project-details2-dark`,
                            children: /*#__PURE__*/_jsx("a", {
                              children: "Innovation and Crafts."
                            })
                          })
                        })]
                      })]
                    })
                  }), /*#__PURE__*/_jsx(SwiperSlide, {
                    className: "swiper-slide",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "content wow fadeInUp",
                      "data-wow-delay": ".3s",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "item-img bg-img wow imago",
                        style: {
                          backgroundImage: "url(/img/portfolio/curs/2.jpg)"
                        }
                      }), /*#__PURE__*/_jsxs("div", {
                        className: "cont bgbox",
                        children: [/*#__PURE__*/_jsx("h6", {
                          children: /*#__PURE__*/_jsx(Link, {
                            href: `/works2/works2-dark`,
                            children: /*#__PURE__*/_jsx("a", {
                              children: "art & illustration"
                            })
                          })
                        }), /*#__PURE__*/_jsx("h4", {
                          children: /*#__PURE__*/_jsx(Link, {
                            href: `/project-details2/project-details2-dark`,
                            children: /*#__PURE__*/_jsx("a", {
                              children: "Inspiring new space."
                            })
                          })
                        })]
                      })]
                    })
                  }), /*#__PURE__*/_jsx(SwiperSlide, {
                    className: "swiper-slide",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "content wow fadeInUp",
                      "data-wow-delay": ".3s",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "item-img bg-img wow imago",
                        style: {
                          backgroundImage: "url(/img/portfolio/curs/3.jpg)"
                        }
                      }), /*#__PURE__*/_jsxs("div", {
                        className: "cont bgbox",
                        children: [/*#__PURE__*/_jsx("h6", {
                          children: /*#__PURE__*/_jsx(Link, {
                            href: `/works2/works2-dark`,
                            children: /*#__PURE__*/_jsx("a", {
                              children: "art & illustration"
                            })
                          })
                        }), /*#__PURE__*/_jsx("h4", {
                          children: /*#__PURE__*/_jsx(Link, {
                            href: `/project-details2/project-details2-dark`,
                            children: /*#__PURE__*/_jsx("a", {
                              children: "Natural plus modern."
                            })
                          })
                        })]
                      })]
                    })
                  }), /*#__PURE__*/_jsx(SwiperSlide, {
                    className: "swiper-slide",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "content wow fadeInUp",
                      "data-wow-delay": ".3s",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "item-img bg-img wow imago",
                        style: {
                          backgroundImage: "url(/img/portfolio/curs/4.jpg)"
                        }
                      }), /*#__PURE__*/_jsxs("div", {
                        className: "cont bgbox",
                        children: [/*#__PURE__*/_jsx("h6", {
                          children: /*#__PURE__*/_jsx(Link, {
                            href: `/works2/works2-dark`,
                            children: /*#__PURE__*/_jsx("a", {
                              children: "art & illustration"
                            })
                          })
                        }), /*#__PURE__*/_jsx("h4", {
                          children: /*#__PURE__*/_jsx(Link, {
                            href: `/project-details2/project-details2-dark`,
                            children: /*#__PURE__*/_jsx("a", {
                              children: "Innovation and Crafts."
                            })
                          })
                        })]
                      })]
                    })
                  }), /*#__PURE__*/_jsx(SwiperSlide, {
                    className: "swiper-slide",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "content wow fadeInUp",
                      "data-wow-delay": ".3s",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "item-img bg-img wow imago",
                        style: {
                          backgroundImage: "url(/img/portfolio/curs/5.jpg)"
                        }
                      }), /*#__PURE__*/_jsxs("div", {
                        className: "cont bgbox",
                        children: [/*#__PURE__*/_jsx("h6", {
                          children: /*#__PURE__*/_jsx(Link, {
                            href: `/works2/works2-dark`,
                            children: /*#__PURE__*/_jsx("a", {
                              children: "art & illustration"
                            })
                          })
                        }), /*#__PURE__*/_jsx("h4", {
                          children: /*#__PURE__*/_jsx(Link, {
                            href: `/project-details2/project-details2-dark`,
                            children: /*#__PURE__*/_jsx("a", {
                              children: "Inspiring new space."
                            })
                          })
                        })]
                      })]
                    })
                  })]
                }) : null, /*#__PURE__*/_jsx("div", {
                  ref: navigationNextRef,
                  className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                  children: /*#__PURE__*/_jsx("i", {
                    className: "ion-ios-arrow-right"
                  })
                }), /*#__PURE__*/_jsx("div", {
                  ref: navigationPrevRef,
                  className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                  children: /*#__PURE__*/_jsx("i", {
                    className: "ion-ios-arrow-left"
                  })
                })]
              })
            })
          })
        })]
      })
    })]
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Works2)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2505:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Blogs3 = () => {
  return /*#__PURE__*/_jsxs("section", {
    className: "blog-grid section-padding position-re",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "container",
      children: [/*#__PURE__*/_jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/_jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/_jsxs("div", {
            className: "sec-head text-center",
            children: [/*#__PURE__*/_jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "RECENT ARTICLES"
            }), /*#__PURE__*/_jsx("h3", {
              className: "wow color-font",
              children: "From our blogs."
            })]
          })
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: "row",
        children: [/*#__PURE__*/_jsx("div", {
          className: "col-lg-4 wow fadeInUp",
          "data-wow-delay": ".3s",
          children: /*#__PURE__*/_jsx("div", {
            className: "item bg-img",
            style: {
              backgroundImage: "url(/img/blog/1.jpg)"
            },
            children: /*#__PURE__*/_jsxs("div", {
              className: "cont",
              children: [/*#__PURE__*/_jsx(Link, {
                href: "/blog/blog-dark",
                children: /*#__PURE__*/_jsx("a", {
                  className: "date",
                  children: /*#__PURE__*/_jsxs("span", {
                    children: [/*#__PURE__*/_jsx("i", {
                      children: "06"
                    }), " Aug 2022"]
                  })
                })
              }), /*#__PURE__*/_jsxs("div", {
                className: "info",
                children: [/*#__PURE__*/_jsx("a", {
                  href: "#0",
                  className: "author",
                  children: /*#__PURE__*/_jsx("span", {
                    children: "by / Admin"
                  })
                }), /*#__PURE__*/_jsx(Link, {
                  href: "/blog/blog-dark",
                  children: /*#__PURE__*/_jsx("a", {
                    className: "tag",
                    children: /*#__PURE__*/_jsx("span", {
                      children: "WordPress"
                    })
                  })
                })]
              }), /*#__PURE__*/_jsx("h6", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/blog-details/blog-details-dark",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                  })
                })
              }), /*#__PURE__*/_jsx("div", {
                className: "btn-more",
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/blog-details/blog-details-dark",
                  children: /*#__PURE__*/_jsx("a", {
                    className: "simple-btn",
                    children: "Read More"
                  })
                })
              })]
            })
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-4 wow fadeInUp",
          "data-wow-delay": ".6s",
          children: /*#__PURE__*/_jsx("div", {
            className: "item active bg-img",
            style: {
              backgroundImage: "url(/img/blog/2.jpg)"
            },
            children: /*#__PURE__*/_jsxs("div", {
              className: "cont",
              children: [/*#__PURE__*/_jsx(Link, {
                href: "/blog/blog-dark",
                children: /*#__PURE__*/_jsx("a", {
                  className: "date",
                  children: /*#__PURE__*/_jsxs("span", {
                    children: [/*#__PURE__*/_jsx("i", {
                      children: "06"
                    }), " Aug 2022"]
                  })
                })
              }), /*#__PURE__*/_jsxs("div", {
                className: "info",
                children: [/*#__PURE__*/_jsx("a", {
                  href: "#0",
                  className: "author",
                  children: /*#__PURE__*/_jsx("span", {
                    children: "by / Admin"
                  })
                }), /*#__PURE__*/_jsx(Link, {
                  href: "/blog/blog-dark",
                  children: /*#__PURE__*/_jsx("a", {
                    className: "tag",
                    children: /*#__PURE__*/_jsx("span", {
                      children: "WordPress"
                    })
                  })
                })]
              }), /*#__PURE__*/_jsx("h6", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/blog-details/blog-details-dark",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                  })
                })
              }), /*#__PURE__*/_jsx("div", {
                className: "btn-more",
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/blog-details/blog-details-dark",
                  children: /*#__PURE__*/_jsx("a", {
                    className: "simple-btn",
                    children: "Read More"
                  })
                })
              })]
            })
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-4 wow fadeInUp",
          "data-wow-delay": ".9s",
          children: /*#__PURE__*/_jsx("div", {
            className: "item bg-img",
            style: {
              backgroundImage: "url(/img/blog/3.jpg)"
            },
            children: /*#__PURE__*/_jsxs("div", {
              className: "cont",
              children: [/*#__PURE__*/_jsx(Link, {
                href: "/blog/blog-dark",
                children: /*#__PURE__*/_jsx("a", {
                  className: "date",
                  children: /*#__PURE__*/_jsxs("span", {
                    children: [/*#__PURE__*/_jsx("i", {
                      children: "06"
                    }), " Aug 2022"]
                  })
                })
              }), /*#__PURE__*/_jsxs("div", {
                className: "info",
                children: [/*#__PURE__*/_jsx("a", {
                  href: "#0",
                  className: "author",
                  children: /*#__PURE__*/_jsx("span", {
                    children: "by / Admin"
                  })
                }), /*#__PURE__*/_jsx(Link, {
                  href: "/blog/blog-dark",
                  children: /*#__PURE__*/_jsx("a", {
                    className: "tag",
                    children: /*#__PURE__*/_jsx("span", {
                      children: "WordPress"
                    })
                  })
                })]
              }), /*#__PURE__*/_jsx("h6", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/blog-details/blog-details-dark",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                  })
                })
              }), /*#__PURE__*/_jsx("div", {
                className: "btn-more",
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/blog-details/blog-details-dark",
                  children: /*#__PURE__*/_jsx("a", {
                    className: "simple-btn",
                    children: "Read More"
                  })
                })
              })]
            })
          })
        })]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "line top right"
    }), /*#__PURE__*/_jsx("div", {
      className: "line bottom left"
    })]
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Blogs3)));

/***/ }),

/***/ 7776:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4340);
/* harmony import */ var _components_Intro3_intro3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2265);
/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4213);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3180);
/* harmony import */ var _components_Full_testimonials_full_testimonials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2461);
/* harmony import */ var _components_Team_team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5303);
/* harmony import */ var _components_blogs_Blogs3_blogs3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2505);
/* harmony import */ var _components_Services2_services2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3731);
/* harmony import */ var _components_Works2_works2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8893);
/* harmony import */ var _components_Numbers2_numbers2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(585);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Works2_works2__WEBPACK_IMPORTED_MODULE_9__]);
_components_Works2_works2__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const Homepage3 = () => {
  const navbarRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const logoRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      nr: navbarRef,
      lr: logoRef
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_Intro3_intro3__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_Services2_services2__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      style: "4item"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_Numbers2_numbers2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_Full_testimonials_full_testimonials__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      withIMG: true
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      hideBGCOLOR: true
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage3);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;