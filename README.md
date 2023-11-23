
Image Compressor CLI

A simple command-line tool for compressing images and reducing their file size.

Installation

To install the Image Compressor CLI, follow these steps:

Install Node.js: Download and install Node.js from the official website: https://node.js.org/en/download/

Install the CLI tool: Open a terminal or command prompt and navigate to the project directory. Then, run the following command:

Bash
npm install image-compressor-cli
Use code with caution. Learn more
Usage

To use the Image Compressor CLI, follow these steps:

Open a terminal or command prompt and navigate to the directory containing the images you want to compress.

Run the following command, replacing <input_path> with the path to the input directory and <output_path> with the path to the output directory (optional):

Bash
node index.js <input_path> <output_path>
Use code with caution. Learn more
If you omit the output path, the images will be compressed in place.

Example

To compress all images in the images directory and save the compressed images to the compressed directory, run the following command:

Bash
node index.js images compressed
Use code with caution. Learn more
Features

Compresses images using the Sharp library.
Supports JPEG, PNG, and WebP image formats.
Reduces image file size without compromising quality.
Works recursively on subdirectories.
Additional Notes

The default compression quality is 80%. You can adjust the quality by specifying a value between 0 and 100.
The tool can also be used to resize images. Specify the desired width and height using the --width and --height options.
Contributions

We welcome contributions to this project. Please feel free to submit pull requests with bug fixes or enhancements.

License

This project is licensed under the MIT License.
