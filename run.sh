#!/bin/bash

run_npm_start() {
    npm run start
}

run_yarn_start() {
    yarn start
}

run_pnpm_start() {
    pnpm start
}

echo "Trying npm run start..."
if run_npm_start; then
    echo "npm run start successful!"
    exit 0
else
    echo "npm run start failed."
fi

echo "Trying yarn start..."
if run_yarn_start; then
    echo "yarn start successful!"
    exit 0
else
    echo "yarn start failed."
fi

echo "Trying pnpm start..."
if run_pnpm_start; then
    echo "pnpm start successful!"
    exit 0
else
    echo "pnpm start failed."
fi

echo "All start commands failed."
exit 1
