import React, { Component, createContext } from "react";

export const ThemeContext = createContext();
/*
Создаёт объект Context. 
Когда React рендерит компонент, который подписан на этот объект,
React получит текущее значение контекста из ближайшего подходящего Provider
выше в дереве компонентов.
*/

/*
Каждый объект Context используется вместе с Provider компонентом,
который позволяет дочерним компонентам,использующим этот контекст, 
подписаться на его изменения.
*/
class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555 " },
  };
  render() {
    return (
      /*value дб данные, которые мы хотим ??? здесь - весь стейт */
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
