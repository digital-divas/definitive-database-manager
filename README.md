# definitive-database-manager

<img src="documentation/readme-assets/basic-interface.png"></img>

Based on:

https://github.com/ultralight-ux/Ultralight

https://github.com/codemirror/CodeMirror

## How to build it:

``` sh
mkdir build
cd build
cmake ..
cmake --build .
```

## How to execute it:

``` sh
chmod a+x DefiniteDbManager
./DefiniteDbManager
```

If you see this error: `error while loading shared libraries: libWebCore.so: cannot open shared object file: No such file or directory`
append the build folder to the environment variable LD_LIBRARY_PATH.

``` sh
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:<PATH-TO-DDM-FOLDER>/definitive-database-manager/build
```