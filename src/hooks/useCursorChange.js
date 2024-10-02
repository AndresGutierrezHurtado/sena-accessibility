export const useCursorChange = (settings) => {
    const cursor = settings.find((setting) => setting.id === "cursor").currentValue;

    switch (cursor) {
        case "white":
            document.querySelectorAll(".mask__overlay").forEach((overlay) => overlay.classList.add("hidden"));
            document.querySelectorAll(".read-guide").forEach((overlay) => overlay.classList.add("hidden"));
            document.body.style.cursor = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPg0KICAgIDxwYXRoIHN0eWxlPSJ0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTNweCwgLTRweCk7IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9IndoaXRlIiBkPSJNIDI5LjY5OTIxOSA0NyBDIDI5LjU3ODEyNSA0NyAyOS40NTcwMzEgNDYuOTc2NTYzIDI5LjMzOTg0NCA0Ni45MzM1OTQgQyAyOS4wODk4NDQgNDYuODM1OTM4IDI4Ljg5MDYyNSA0Ni42NDQ1MzEgMjguNzgxMjUgNDYuMzk4NDM4IEwgMjIuOTQ1MzEzIDMyLjkwNjI1IEwgMTUuNjgzNTk0IDM5LjczMDQ2OSBDIDE1LjM5NDUzMSA0MC4wMDM5MDYgMTQuOTY4NzUgNDAuMDc0MjE5IDE0LjYwMTU2MyAzOS45MTc5NjkgQyAxNC4yMzgyODEgMzkuNzYxNzE5IDE0IDM5LjM5ODQzOCAxNCAzOSBMIDE0IDYgQyAxNCA1LjYwMTU2MyAxNC4yMzQzNzUgNS4yNDIxODggMTQuNjAxNTYzIDUuMDgyMDMxIEMgMTQuOTY0ODQ0IDQuOTI1NzgxIDE1LjM5MDYyNSA0Ljk5NjA5NCAxNS42ODM1OTQgNS4yNjk1MzEgTCAzOS42ODM1OTQgMjcuNjY3OTY5IEMgMzkuOTcyNjU2IDI3LjkzNzUgNDAuMDc0MjE5IDI4LjM1NTQ2OSAzOS45NDUzMTMgMjguNzI2NTYzIEMgMzkuODE2NDA2IDI5LjEwMTU2MyAzOS40ODA0NjkgMjkuMzYzMjgxIDM5LjA4NTkzOCAyOS4zOTg0MzggTCAyOC45MDIzNDQgMzAuMjczNDM4IEwgMzUuMDA3ODEzIDQzLjU4NTkzOCBDIDM1LjExNzE4OCA0My44MjQyMTkgMzUuMTI4OTA2IDQ0LjEwMTU2MyAzNS4wMzUxNTYgNDQuMzUxNTYzIEMgMzQuOTQxNDA2IDQ0LjYwMTU2MyAzNC43NTc4MTMgNDQuODAwNzgxIDM0LjUxNTYyNSA0NC45MTAxNTYgTCAzMC4xMTMyODEgNDYuOTEwMTU2IEMgMjkuOTgwNDY5IDQ2Ljk2ODc1IDI5Ljg0Mzc1IDQ3IDI5LjY5OTIxOSA0NyBaIi8+DQo8L3N2Zz4='), auto";
            break;
        case "black":
            document.querySelectorAll(".mask__overlay").forEach((overlay) => overlay.classList.add("hidden"));
            document.querySelectorAll(".read-guide").forEach((overlay) => overlay.classList.add("hidden"));
            document.body.style.cursor = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPg0KICAgIDxwYXRoIHN0eWxlPSJ0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTNweCwgLTRweCk7IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9ImJsYWNrIiBkPSJNIDI5LjY5OTIxOSA0NyBDIDI5LjU3ODEyNSA0NyAyOS40NTcwMzEgNDYuOTc2NTYzIDI5LjMzOTg0NCA0Ni45MzM1OTQgQyAyOS4wODk4NDQgNDYuODM1OTM4IDI4Ljg5MDYyNSA0Ni42NDQ1MzEgMjguNzgxMjUgNDYuMzk4NDM4IEwgMjIuOTQ1MzEzIDMyLjkwNjI1IEwgMTUuNjgzNTk0IDM5LjczMDQ2OSBDIDE1LjM5NDUzMSA0MC4wMDM5MDYgMTQuOTY4NzUgNDAuMDc0MjE5IDE0LjYwMTU2MyAzOS45MTc5NjkgQyAxNC4yMzgyODEgMzkuNzYxNzE5IDE0IDM5LjM5ODQzOCAxNCAzOSBMIDE0IDYgQyAxNCA1LjYwMTU2MyAxNC4yMzQzNzUgNS4yNDIxODggMTQuNjAxNTYzIDUuMDgyMDMxIEMgMTQuOTY0ODQ0IDQuOTI1NzgxIDE1LjM5MDYyNSA0Ljk5NjA5NCAxNS42ODM1OTQgNS4yNjk1MzEgTCAzOS42ODM1OTQgMjcuNjY3OTY5IEMgMzkuOTcyNjU2IDI3LjkzNzUgNDAuMDc0MjE5IDI4LjM1NTQ2OSAzOS45NDUzMTMgMjguNzI2NTYzIEMgMzkuODE2NDA2IDI5LjEwMTU2MyAzOS40ODA0NjkgMjkuMzYzMjgxIDM5LjA4NTkzOCAyOS4zOTg0MzggTCAyOC45MDIzNDQgMzAuMjczNDM4IEwgMzUuMDA3ODEzIDQzLjU4NTkzOCBDIDM1LjExNzE4OCA0My44MjQyMTkgMzUuMTI4OTA2IDQ0LjEwMTU2MyAzNS4wMzUxNTYgNDQuMzUxNTYzIEMgMzQuOTQxNDA2IDQ0LjYwMTU2MyAzNC43NTc4MTMgNDQuODAwNzgxIDM0LjUxNTYyNSA0NC45MTAxNTYgTCAzMC4xMTMyODEgNDYuOTEwMTU2IEMgMjkuOTgwNDY5IDQ2Ljk2ODc1IDI5Ljg0Mzc1IDQ3IDI5LjY5OTIxOSA0NyBaIi8+DQo8L3N2Zz4='), auto";
            break;
        case "mask":
            document.querySelectorAll(".mask__overlay").forEach((overlay) => overlay.classList.remove("hidden"));
            document.querySelectorAll(".read-guide").forEach((overlay) => overlay.classList.add("hidden"));
            document.body.style.cursor = "auto";
            break;
        case "readGuide":
            document.querySelectorAll(".mask__overlay").forEach((overlay) => overlay.classList.add("hidden"));
            document.querySelectorAll(".read-guide").forEach((overlay) => overlay.classList.remove("hidden"));
            break;
        default:
            document.querySelectorAll(".mask__overlay").forEach((overlay) => overlay.classList.add("hidden"));
            document.querySelectorAll(".read-guide").forEach((overlay) => overlay.classList.add("hidden"));
            document.body.style.cursor = "auto";
            break;
    }
}