const digits = [];
        digits[0] = [0, 2, 3, 4, 5, 6];
        digits[1] = [4, 6];
        digits[2] = [0, 1, 2, 4, 5];
        digits[3] = [0, 1, 2, 4, 6];
        digits[4] = [1, 3, 4, 6];
        digits[5] = [0, 1, 2, 3, 6];
        digits[6] = [0, 1, 2, 3, 5, 6];
        digits[7] = [0, 4, 6];
        digits[8] = [0, 1, 2, 3, 4, 5, 6];
        digits[9] = [0, 1, 2, 3, 4, 6];
        let digit = document.querySelector('.digit');
        let lines = document.querySelectorAll('.line');
        let displayNumber = (number) => {
            for (let i = 0; i < lines.length; i++) {
                lines[i].style.display = 'none';
            }
            for (let i = 0; i < digits[number].length; i++) {
                lines[digits[number][i]].style.display = 'grid';
            }
        }

        let number = 9;
        let countingDown = setInterval(function () {
            if (number >= 0) {
                displayNumber(number);
                number--;
            }
            else {
                clearInterval(countingDown);
                digit.style.display = 'none';
                document.body.innerHTML = '<h1>Zaczynamy!!!</h1>';
            }
        }, 1000)