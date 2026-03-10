Backend to część aplikacji działająca na serwerze

PHP (Hypertext Preprocessor) to język programowania używany głównie do tworzenia dynamicznych stron internetowych (ważne jest że jest wykonywany po stronie serwera, a jego wynik jest wysyłany do przeglądarki użytkownika). PHP jest językiem wieloparadygmatowym, gdyż obługuje zarówno programowanie proceduralne jak i obiektowe. 

W PHP zmienne zawsze zaczynają się od "$", np:
$nazwa = "";

PHP jest językiem typowanym dynamicznie, co oznacza że nie trzeba deklarować typu zmiennej.

PHP posiada funkcje sprawdzające typ jak:
is_int() -> sprawdza czy jest typu Integer
is_float() -> sprawdza czy jest typu Float
is_string() -> sprawdza czy jest tekstem
is_bool() -> sprawdza czy jest booleanem
is_array() -> sprawdza czy jest listą 
is_numeric() -> sprtawdza czy jest numerem
is_null() -> sprawdza czy jest typu null.

W PHP zmienianie typu jest zarówno automatyczne np:
$x = "5"; // <-- jest typu string
$x = 10; // <-- jest typu int 

echo $x + $y; // wynik 15

jak i manualne np:
$tekst = "123"; 
$liczba = (int)$tekst; // String -> Integer

$x = "3.14";
$y = (float)$x; // String -> Float

$a = 100;
$b = (string)$a; // Integer -> String



Język PHP jest używany głównie do tworzenia aplikacji webowych np.:
Strony Internetowe
Systemy CMS (Content Managment System, np. Wordpress, Joomla!) 
Sklepy Internetowe
API 
Systemy Logowania
