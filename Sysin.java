import java.util.Random;
import java.util.Scanner;

public class Sysin {
    public static void main(String[] args) {
        int maxValue = 100; 
        Random random = new Random();
        int randomNumber = random.nextInt(maxValue + 1); 
        Scanner sc = new Scanner(System.in);

        boolean isMatched = false;
        int attempts = 0; 
        int score = 100; 
        int maxAttempts = 6; 

        while (!isMatched && attempts < maxAttempts) { 
            System.out.println("Enter the value that you thought:");
            int n = sc.nextInt();
            attempts++;
            if (n == randomNumber) {
                System.out.println("The number is matched");
                isMatched = true;
            } else if (n > randomNumber) {
                System.out.println("The number is greater than the assigned value");
            } else {
                System.out.println("The number is lesser than the assigned value");
            }
            if (isMatched) {
                System.out.println("You guessed the number in " + attempts + " attempts.");
                if (attempts == 1) {
                    System.out.println("Score: " + score);
                } else if (attempts == 2) {
                    score = 85; 
                    System.out.println("Score: " + score);
                } else if (attempts == 3){
                    score = 70; 
                    System.out.println("Score: " + score);      
                } else if (attempts == 4){
                    score = 50; 
                    System.out.println("Score: " + score);      
                } else if (attempts == 5){
                    score = 35; 
                    System.out.println("Score: " + score);      
                }
            }
        }
        if (!isMatched) {
            System.out.println("YOU LOST THE GAME");
        }
    }
}
