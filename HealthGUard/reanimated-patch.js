// reanimated-patch.js
if (global.__reanimatedWorkletInit === undefined) {
  global.__reanimatedWorkletInit = () => {
    console.log("Reanimated worklet initialized");
  };
}

// Patch para TurboModules
if (global.__turboModuleProxy === undefined) {
  global.__turboModuleProxy = () => ({
    addListener: () => {},
    removeListeners: () => {},
  });
}
