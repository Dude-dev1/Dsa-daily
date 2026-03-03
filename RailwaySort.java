import java.util.*;

public class RailwaySort {

    public static void main(String[] args){
        // initialize the tracks
        char[] T1_initial = {'A', 'B', 'C'};
        char[] T2_initial = {'C', 'A', 'B'};

        // get the total number of carriages
        int num = T1_initial.length + T2_initial.length;
        char[] allCarriages = new char[num];

        // combine T1 and T2 into one array
        System.arraycopy(T1_initial, 0, allCarriages, 0, T1_initial.length);
        System.arraycopy(T2_initial, 0, allCarriages, T1_initial.length, T2_initial.length);

        // sort carriages
        Arrays.sort(allCarriages);

        // count each type
        int countA = 0, countB = 0, countC = 0;
        for(char c:allCarriages){
            switch(c){
                case 'A':
                    countA++;
                    break;
                case 'B':
                    countB++;
                    break;
                default:
                    countC++;
            }
        }

        // distribute to tracks
        char[] T1 = new char[countB];
        char[] T2 = new char[countC];
        char[] T3 = new char[countA];

        Arrays.fill(T1, 'B');
        Arrays.fill(T2, 'C');
        Arrays.fill(T3, 'A');

        // output results
        System.out.println("T1 track contains: " + Arrays.toString(T1));
        System.out.println("T2 track contains: " + Arrays.toString(T2));
        System.out.println("T3 track contains: " + Arrays.toString(T3));
    }
}