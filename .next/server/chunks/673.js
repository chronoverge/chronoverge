"use strict";
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 5673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ works_style2)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/common/initIsotope.js
const initIsotope = () => {
  var grid = document.querySelectorAll(".gallery");
  var iso;

  if (grid.length >= 1) {
    grid.forEach(item => {
      iso = new Isotope(item, {
        itemSelector: ".items"
      });
    });
  }

  var gridMons = document.querySelectorAll(".gallery-mons");

  if (gridMons.length >= 1) {
    gridMons.forEach(item => {
      iso = new Isotope(item, {
        itemSelector: ".items",
        masonry: {
          columnWidth: ".width2"
        }
      });
    });
  }

  var filtersElem = document.querySelector(".filtering");

  if (filtersElem) {
    filtersElem.addEventListener("click", function (event) {
      if (!matchesSelector(event.target, "span")) {
        return;
      }

      var filterValue = event.target.getAttribute("data-filter");
      filterValue = filterValue;
      iso.arrange({
        filter: filterValue
      });
    });
    var buttonGroups = document.querySelectorAll(".filtering");

    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }

    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener("click", function (event) {
        if (!matchesSelector(event.target, "span")) {
          return;
        }

        buttonGroup.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
      });
    }
  }
};

/* harmony default export */ const common_initIsotope = (initIsotope);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Works-style2/works-style2.jsx
/* eslint-disable @next/next/no-img-element */






const WorksStyle2 = ({
  grid,
  hideFilter,
  filterPosition
}) => {
  external_react_default().useEffect(() => {
    setTimeout(() => {
      common_initIsotope();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: `${grid ? grid === 3 ? "three-column" : null : null} portfolio section-padding pb-70`,
    children: [!hideFilter && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "sec-head text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Portfolio"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              className: "wow color-font",
              children: ["Our Recent Web Design & ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Some Past Projects."]
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [!hideFilter && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `filtering ${filterPosition === "center" ? "text-center" : filterPosition === "left" ? "text-left" : "text-right"} col-12`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "filter",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": "*",
              className: "active",
              children: "All"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".brand",
              children: "Branding"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".web",
              children: "Mobile App"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".graphic",
              children: "Creative"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "gallery full-width",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items graphic wow fadeInUp`,
            "data-wow-delay": ".4s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item-img",
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "imago wow",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/portfolio/1/1.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Creativity Demand"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/works3/works3-dark",
                  children: "Design"
                }), ",", /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/works3/works3-dark",
                  children: "WordPress"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items web wow fadeInUp`,
            "data-wow-delay": ".4s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item-img",
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "imago wow",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/portfolio/1/2.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Through The Breaking"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/works3/works3-dark",
                  children: "Design"
                }), ",", /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/works3/works3-dark",
                  children: "WordPress"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items brand wow fadeInUp`,
            "data-wow-delay": ".4s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item-img",
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "imago wow",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/portfolio/1/3.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Create With Creatives"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/works3/works3-dark",
                  children: "Design"
                }), ",", /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/works3/works3-dark",
                  children: "WordPress"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items graphic wow fadeInUp`,
            "data-wow-delay": ".4s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item-img",
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "imago wow",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/portfolio/1/4.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Energies of Love"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/works3/works3-dark",
                  children: "Design"
                }), ",", /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/works3/works3-dark",
                  children: "WordPress"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items web wow fadeInUp`,
            "data-wow-delay": ".4s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item-img",
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "imago wow",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/portfolio/1/5.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "See It Yourself"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/works3/works3-dark",
                  children: "Design"
                }), ",", /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/works3/works3-dark",
                  children: "WordPress"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items brand wow fadeInUp`,
            "data-wow-delay": ".4s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "item-img",
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: `/project-details2/project-details2-dark`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "imago wow",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/img/portfolio/portfolio/1/6.jpg",
                    alt: "image"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "item-img-overlay"
                  })]
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Blast From The Past"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/works3/works3-dark",
                  children: "Design"
                }), ",", /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  href: "/works3/works3-dark",
                  children: "WordPress"
                })]
              })]
            })]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const works_style2 = (WorksStyle2);

/***/ })

};
;