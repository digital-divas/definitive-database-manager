cmake_minimum_required (VERSION 3.8)
project(DefiniteDbManager)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set (ULTRALIGHT ${CMAKE_SOURCE_DIR}/lib/ultralight)

if(WIN32)
	set (ULTRALIGHT_BINS ${ULTRALIGHT}/windows/x64-Debug/bin)
	set (ULTRALIGHT_LIBS ${ULTRALIGHT}/windows/x64-Debug/lib)
endif(WIN32)

link_directories (${ULTRALIGHT_LIBS})
include_directories(${ULTRALIGHT}/include)
link_libraries(UltralightCore Ultralight WebCore AppCore)


# Add source to this project's executable.
add_executable (DefiniteDbManager WIN32 "main.cpp")

add_custom_command(TARGET DefiniteDbManager POST_BUILD COMMAND ${CMAKE_COMMAND} -E copy_directory "${ULTRALIGHT_BINS}" $<TARGET_FILE_DIR:DefiniteDbManager>)

if (MSVC)
  # Tell MSVC to use main instead of WinMain for Windows subsystem executables
  set_target_properties(DefiniteDbManager PROPERTIES LINK_FLAGS "/ENTRY:mainCRTStartup")
endif()