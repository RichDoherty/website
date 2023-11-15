"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import type { Color } from "./Header";

const ColorChangePanel = (props: {
    lightColors: Color[];
    mediumColors: Color[];
    darkColors: Color[];
    lightBgColors: Color[];
    darkBgColors: Color[];
    changePrimaryColor: (color: Color) => void;
    changeSecondaryColor: (color: Color) => void;
    changeBackgroundColor: (color: Color) => void;
}) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleColorMenu = () => {
        document.getElementById("color-menu")?.classList.toggle("hidden");
    };

    const renderBgColorComponents = () => {
        if (!mounted) {
            return null;
        }

        return (
            <div className="grid grid-flow-row grid-cols-3 gap-1">
                {theme === "dark"
                    ? props.darkBgColors.map((color) => {
                          return (
                              <button
                                  key={`dark-bg-${color.name}`}
                                  onClick={() =>
                                      props.changeBackgroundColor(color)
                                  }
                                  id={`dark-bg-${color.name}`}
                                  className={`w-8 h-6 ${color.class} rounded-sm drop-shadow-md`}
                              ></button>
                          );
                      })
                    : props.lightBgColors.map((color) => {
                          return (
                              <button
                                  key={`light-bg-${color.name}`}
                                  onClick={() =>
                                      props.changeBackgroundColor(color)
                                  }
                                  id={`light-bg-${color.name}`}
                                  className={`w-8 h-6 ${color.class} rounded-sm drop-shadow-md`}
                              ></button>
                          );
                      })}
            </div>
        );
    };

    const renderPrimaryColorComponents = () => {
        if (!mounted) {
            return null;
        }

        return (
            <div className="grid grid-flow-row grid-cols-3 gap-1">
                {theme === "dark"
                    ? props.lightColors.map((color) => {
                          return (
                              <button
                                  key={`dark-primary-${color.name}`}
                                  onClick={() =>
                                      props.changePrimaryColor(color)
                                  }
                                  className={`w-8 h-6 ${color.class} rounded-sm drop-shadow-md`}
                              ></button>
                          );
                      })
                    : props.mediumColors.map((color) => {
                          return (
                              <button
                                  key={`light-primary-${color.name}`}
                                  onClick={() =>
                                      props.changePrimaryColor(color)
                                  }
                                  className={`w-8 h-6 ${color.class} rounded-sm drop-shadow-md`}
                              ></button>
                          );
                      })}
            </div>
        );
    };

    const renderSecondaryColorComponents = () => {
        if (!mounted) {
            return null;
        }

        return (
            <div className="grid grid-flow-row grid-cols-3 gap-1">
                {(theme === "system" && systemTheme === "dark") ||
                theme === "dark"
                    ? props.mediumColors.map((color) => {
                          return (
                              <button
                                  key={`dark-secondary-${color.name}`}
                                  onClick={() =>
                                      props.changeSecondaryColor(color)
                                  }
                                  className={`w-8 h-6 ${color.class} rounded-sm drop-shadow-md`}
                              ></button>
                          );
                      })
                    : props.darkColors.map((color) => {
                          return (
                              <button
                                  key={`light-secondary-${color.name}`}
                                  onClick={() =>
                                      props.changeSecondaryColor(color)
                                  }
                                  className={`w-8 h-6 ${color.class} rounded-sm drop-shadow-md`}
                              ></button>
                          );
                      })}
            </div>
        );
    };

    return (
        <div className="invisible pr-4 text-transparent dark:bg-primary bg-secondary bg-clip-text sm:visible">
            <button onClick={toggleColorMenu} className="inline">
                Change Theme
            </button>
            <div
                id="color-menu"
                className={`absolute z-50 grid hidden grid-cols-3 gap-4 px-4 py-2 pb-4 m-2 rounded-md grid-flow-cols bg-lightBg dark:bg-darkBg drop-shadow-lg dark:shadow-lg w-90 right-10`}
            >
                <div className="">
                    <div className="mb-2 text-neutral-900 dark:text-neutral-300">
                        Background
                    </div>
                    {renderBgColorComponents()}
                </div>
                <div>
                    <div className="mb-2 text-neutral-900 dark:text-neutral-300">
                        Primary
                    </div>
                    {renderPrimaryColorComponents()}
                </div>
                <div>
                    <div className="mb-2 text-neutral-900 dark:text-neutral-300">
                        Secondary
                    </div>
                    {renderSecondaryColorComponents()}
                </div>
            </div>
        </div>
    );
};

export default ColorChangePanel;
