// In your main file (where you're opening the new window)
export default function addCard() {
    const newWindow = window.open('', '', 'width=450,height=700');
    newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Add card</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charset="UTF-8" />
          <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        </head>
        <body>
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Add bank card</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" action="#" method="POST">
                        <div>
                            <label for="cardholder_name" class="block text-sm/6 font-medium text-gray-900">Card number</label>
                            <div class="mt-2">
                                <input
                                    type="text"
                                    name="cardholder_name"
                                    id="cardholder_name"
                                    autocomplete="text"
                                    oninput="validateCardNumber(this)""
                                    required
                                    maxlength="19"
                                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                            </div>
                        </div>
                        <div>
                            <label for="cardholder_name" class="block text-sm/6 font-medium text-gray-900">Cardholder name</label>
                            <div class="mt-2">
                                <input
                                    type="text"
                                    name="cardholder_name"
                                    id="cardholder_name"
                                    autocomplete="text"
                                    oninput="validateCardholderName(this)"
                                    required
                                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm/6 font-medium text-gray-900">Valid thru:</label>
                               
                            </div>
                            <div class="mt-2">
                                <input
                                    type="text"
                                    name="valid_thru"
                                    id="valid_thru"
                                    oninput="formatValidThru(this)"
                                    maxlength="7"
                                    autocomplete="text"
                                    required
                                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                            </div>
                        </div> <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm/6 font-medium text-gray-900">CVV:</label>
                               
                            </div>
                            <div class="mt-2">
                                <input
                                    type="text"
                                    name="valid_thru"
                                    id="valid_thru"
                                    oninput="validateCardNumber(this)"
                                    maxlength="3"
                                    autocomplete="text"
                                    required
                                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add card</button>
                        </div>
                    </form>

                </div>
            </div>

            <script>
            function validateCardNumber(input) {
                  input.value = input.value.replace(/\\D/g, '').slice(0, 20);

                  input.value = input.value.replace(/(\\d{4})(?=\\d)/g, '$1 ');
            }
                function validateCardholderName(input) {
                   
                    input.value = input.value.replace(/[^A-Za-z .'-]/g, '');
                }
                function formatValidThru(input) {
                                
                    input.value = input.value.replace(/\\D/g, '');
                
                    if (input.value.length > 2) {
                      input.value = input.value.slice(0, 2) + ' / ' + input.value.slice(2, 4);
                    }
                }
            </script>
        </body>
        </html>
    `);
    newWindow.document.close(); // Close the document stream to finish loading
}
