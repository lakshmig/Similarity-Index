angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$filter) {
            $scope.fstring=""
            $scope.sstring=""
            
            /** @return an array of adjacent letter pairs contained in the input string */
            function letterPairs( str) {
                console.log("letterPairs:",str.length)
            
                var numPairs = str.length-1;
                var pairs = [] //new String[numPairs];
                for (var i=0; i<numPairs; i++) {
                pairs[i] = str.substring(i,i+2);
                }
                console.log("letterPairs:",pairs)
                return pairs;
            }
            
            /** @return an ArrayList of 2-character Strings. */
            function  wordLetterPairs( str) {
            var allPairs = [];
            // Tokenize the string and put the tokens/words into an array
            var words = str.split(" ");
            console.log("Words of string:",words)
            // For each word
            for (var w=0; w < words.length; w++) {
            // Find the pairs of characters
            var pairsInWord = letterPairs(words[w]);
            for (var p=0; p < pairsInWord.length; p++) {
            allPairs.push(pairsInWord[p]);
            console.log("wordLetterPairs:",allPairs)
            }
            }
            return allPairs;
            }
            
            // function to check the intersections of array.
           /* function intersect(a, b) {
            var t;
            if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
            return a.filter(function (e) {
                            if (b.indexOf(e) !== -1) return true;
                            });
            }*/
            
            //function to calculate the SI.
            $scope.calculateSI = function(str1,str2) {
            
            console.log('calculateSI:', str1);
            console.log('calculateSI',  str2);
            
            var pairs1 = wordLetterPairs(str1.toUpperCase());
            var pairs2 = wordLetterPairs(str2.toUpperCase());
            console.log('wordLetterPairs str1:',pairs1 );
            console.log('wordLetterPairs str2:',pairs2 );
            
            var intersection = 0;
            var union = pairs1.length + pairs2.length;
            console.log('union:',union );

            for (var i=0; i<pairs1.length; i++) {
            var pair1=pairs1[i];
                for(var j=0; j<pairs2.length; j++) {
                    var pair2=pairs2[j];
                    if (pair1 === pair2) {
                    intersection++;
                    console.log("Intersection:",intersection)
                    pairs2.pop(j);
                    break;
                    }
                }
            }
            var similarity = ((2 * intersection)/union)*100
            var  rounded = Math.round(similarity)
            $scope.similarityIndex = rounded+'%';
            
            };
            

            
            });

