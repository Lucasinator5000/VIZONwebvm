// config_public_terminal.js

// Phase 1 Execution: Explicitly lock down 2 GB of RAM (32,768 Wasm pages)
const totalPages = 32768; 
export const cxMemory = new WebAssembly.Memory({
    initial: totalPages,
    maximum: totalPages,
    shared: true // Required for multi-threaded SharedArrayBuffer execution
});

// Update to point to your custom-compiled image location
export const diskImageUrl = "/custom-disk-images/debian_vizon.ext2";

// Switched to "bytes" to fetch our standalone local/hosted .ext2 file
export const diskImageType = "bytes";

// Print an introduction message about the technology
export const printIntro = false; // Set to false for a clean custom boot loader experience

// Is a graphical display needed
export const needsDisplay = false;

// Executable full path (Required)
export const cmd = "/bin/bash";

// Arguments, as an array (Required)
export const args = ["--login"];

// Optional extra parameters
export const opts = {
    // Environment variables
    env: ["HOME=/home/user", "TERM=xterm", "USER=user", "SHELL=/bin/bash", "EDITOR=vim", "LANG=en_US.UTF-8", "LC_ALL=C"],
    // Current working directory
    cwd: "/home/user",
    // User id
    uid: 1000,
    // Group id
    gid: 1000
};
