namespace CandidateInformationAPI.Models
{
    public class CandidateInformation
    {
        public int id { get; set; }
        public string firstName { get; set; } = string.Empty;
        public string lastName { get; set; } = string.Empty;
        public string emailAddress { get; set; } = string.Empty;
        public string address { get; set; } = string.Empty;
        public string country { get; set; } = string.Empty;
    }
}
