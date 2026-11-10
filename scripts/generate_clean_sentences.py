#!/usr/bin/env python3
import json

# Sentences strictly between 6 and 17 words
# Easy: 6-8 words
# Medium: 9-12 words
# Hard: 13-15 words
# Challenge: 16-17 words
# All vocabulary is everyday customer service / call center English.

sentences_raw = [
    # ---- EASY: 6 to 8 words (40 sentences) ----
    ("Please keep your reference number for tracking.", "easy"),
    ("I am happy to assist you today.", "easy"),
    ("Please verify the six digit security code.", "easy"),
    ("Your refund will arrive in three days.", "easy"),
    ("Could you please confirm your email address?", "easy"),
    ("Please hold while I check your account.", "easy"),
    ("We have updated your current delivery address.", "easy"),
    ("Thank you for choosing our customer service.", "easy"),
    ("You can download the invoice from our app.", "easy"),
    ("Your monthly statement is ready for review.", "easy"),
    ("Please turn off the router for thirty seconds.", "easy"),
    ("A confirmation text was sent to your phone.", "easy"),
    ("Our office opens tomorrow morning at eight.", "easy"),
    ("Please attach a photo of the damaged package.", "easy"),
    ("I have cancelled the recurring monthly subscription.", "easy"),
    ("Let me transfer you to our billing team.", "easy"),
    ("Your payment has been received and verified.", "easy"),
    ("Please speak your registered phone number clearly.", "easy"),
    ("You will receive a tracking link via email.", "easy"),
    ("The representative will join the call shortly.", "easy"),
    ("We are currently experiencing high call volume.", "easy"),
    ("Please allow forty eight hours for shipping.", "easy"),
    ("I have sent a password reset link.", "easy"),
    ("Your flight reservation is now fully confirmed.", "easy"),
    ("Please provide the serial number on the box.", "easy"),
    ("The package was delivered to your front door.", "easy"),
    ("I have noted your request in the system.", "easy"),
    ("You can easily track the driver on map.", "easy"),
    ("Please check your email for the return label.", "easy"),
    ("We have issued a credit voucher for you.", "easy"),
    ("Please stay on the line for a survey.", "easy"),
    ("Is there anything else I can help with?", "easy"),
    ("Your warranty coverage expires at the year end.", "easy"),
    ("Please reboot your computer and try logging in.", "easy"),
    ("I apologize for the wait time you experienced.", "easy"),
    ("Your appointment is scheduled for next Tuesday morning.", "easy"),
    ("Please confirm the primary name on this card.", "easy"),
    ("The replacement part will be delivered by courier.", "easy"),
    ("I am updating your contact details right now.", "easy"),
    ("Thank you for your patience during this call.", "easy"),

    # ---- MEDIUM: 9 to 12 words (45 sentences) ----
    ("Please ensure that your mobile phone is connected to the internet.", "medium"),
    ("I can help you change your departure date with no penalty.", "medium"),
    ("We have processed the full refund back to your original payment card.", "medium"),
    ("You can reset your account password by clicking the link in email.", "medium"),
    ("The technician is scheduled to visit your home between two and four.", "medium"),
    ("Please provide the twelve digit tracking number found on your store receipt.", "medium"),
    ("We sent a one time passcode to your registered mobile telephone number.", "medium"),
    ("You can manage all your billing preferences directly from your account settings.", "medium"),
    ("Our customer support desk is available twenty four hours every single day.", "medium"),
    ("The courier attempted delivery today but nobody was home to sign it.", "medium"),
    ("I have applied a ten percent discount voucher to your next purchase.", "medium"),
    ("Please verify the last four digits of your credit card for authorization.", "medium"),
    ("We apologize for the inconvenience caused by the temporary system maintenance outage.", "medium"),
    ("Your return package has safely arrived at our central inspection warehouse today.", "medium"),
    ("Please keep your confirmation code ready before speaking to our senior specialist.", "medium"),
    ("A digital copy of your payment receipt was sent to your inbox.", "medium"),
    ("You can choose your seat assignment through our mobile application at checkin.", "medium"),
    ("We have extended your trial period for thirty additional days at no charge.", "medium"),
    ("Please check that all cables are firmly plugged into your wifi router.", "medium"),
    ("I will personally monitor your service ticket until the issue is resolved.", "medium"),
    ("The bank requires two business days to clear the transferred balance amount.", "medium"),
    ("Please confirm your date of birth and postal code for security reasons.", "medium"),
    ("Your monthly data plan will automatically renew on the first of next month.", "medium"),
    ("We can schedule a callback for you when our lines are less busy.", "medium"),
    ("The tracking update shows that your parcel is out for delivery today.", "medium"),
    ("Please take a screenshot of the error message displayed on your monitor.", "medium"),
    ("I have updated your home address and your new card is dispatched.", "medium"),
    ("You will receive an automated notification as soon as the driver arrives.", "medium"),
    ("Our billing department has waived the late fee on your current statement.", "medium"),
    ("Please ensure that you log out of all public computers after browsing.", "medium"),
    ("The flight departure gate was shifted from gate twelve to gate twenty.", "medium"),
    ("I am pleased to inform you that your claim has been approved.", "medium"),
    ("Please read the terms and conditions before submitting your online warranty registration.", "medium"),
    ("We have credited twenty five dollars to your account for the delay.", "medium"),
    ("You can track the live location of your technician on our website.", "medium"),
    ("Please keep your order confirmation number handy for future reference and assistance.", "medium"),
    ("The customer care department will follow up with an email update tomorrow.", "medium"),
    ("I have successfully updated your email address across our entire customer database.", "medium"),
    ("Your subscription plan allows streaming on up to four separate personal devices.", "medium"),
    ("Please disable your popup blocker before continuing with the online verification process.", "medium"),
    ("We will send a replacement unit immediately without waiting for the return.", "medium"),
    ("You can download your detailed statement in PDF format from the dashboard.", "medium"),
    ("Please double check that the shipping address includes your apartment unit number.", "medium"),
    ("I will stay on the phone while you restart your desktop computer.", "medium"),
    ("Our team has escalated your complaint to the priority support team leader.", "medium"),

    # ---- HARD: 13 to 15 words (25 sentences) ----
    ("Although the order was delayed, our dispatch warehouse expedited priority delivery at no additional cost.", "hard"),
    ("Please make sure you have your passport and booking reference number ready at the counter.", "hard"),
    ("We have issued a replacement order that will arrive within two to three business days.", "hard"),
    ("If you do not recognize this transaction, we can block your payment card right now.", "hard"),
    ("The technical support agent will guide you step by step through the device installation procedure.", "hard"),
    ("You can view your real time account balance and recent transactions on the mobile dashboard.", "hard"),
    ("Please remember to keep your login credentials and temporary passwords completely confidential at all times.", "hard"),
    ("Our company policy allows customers to return unopened items within thirty days of purchase date.", "hard"),
    ("I have forwarded your request to the regional supervisor who will call you back today.", "hard"),
    ("Please verify that your registered contact email address is spelled correctly in our current records.", "hard"),
    ("We appreciate your cooperation while our technical team works to resolve this unexpected network disruption.", "hard"),
    ("You can reschedule your technician appointment online anytime without paying any additional cancellation fees whatsoever.", "hard"),
    ("The tracking page indicates that your package was delivered safely to your neighbor next door.", "hard"),
    ("Please keep your service contract agreement number handy whenever you contact our technical support helpline.", "hard"),
    ("Our billing department has refunded the duplicate payment charge directly back to your checking account.", "hard"),
    ("You will receive an email confirmation containing your revised flight itinerary within the next hour.", "hard"),
    ("Please ensure that your computer remains connected to power during the firmware software update process.", "hard"),
    ("I have placed a temporary hold on your account until our security specialists complete verification.", "hard"),
    ("The supervisor confirmed that your store warranty covers both parts and labor for three years.", "hard"),
    ("Please take a moment to answer three brief questions about your customer support experience today.", "hard"),
    ("We have applied a courtesy credit to compensate for the downtime you experienced this week.", "hard"),
    ("You may upload photos of the damaged merchandise directly through our mobile customer portal anytime.", "hard"),
    ("Our customer service department is committed to providing prompt and courteous assistance to every caller.", "hard"),
    ("Please check your spam or junk folder if the confirmation email does not appear immediately.", "hard"),
    ("The shipping company will attempt delivery three times before returning the parcel to our facility.", "hard"),

    # ---- CHALLENGE: 16 to 17 words (15 sentences) ----
    ("May I please confirm your full legal name, current residential address, and your registered account telephone number?", "challenge"),
    ("Although the scheduled flight was canceled due to weather, all affected passengers received complimentary hotel accommodations.", "challenge"),
    ("Please ensure that your mobile device is fully charged before initiating the required system software upgrade process.", "challenge"),
    ("Our customer support manager has authorized a full refund along with a twenty dollar store gift voucher.", "challenge"),
    ("If your broadband connection does not restore after rebooting, our technician will visit your home tomorrow morning.", "challenge"),
    ("Please keep your identification card ready when our courier agent arrives to complete the mandatory physical verification.", "challenge"),
    ("We have documented your feedback regarding the delivery delay and shared it with regional logistics management.", "challenge"),
    ("You can access all previous monthly billing statements and invoices through the secure online document archive.", "challenge"),
    ("Please verify that the shipping address listed on your order confirmation matches your current residential delivery location.", "challenge"),
    ("Our customer care team is available around the clock to ensure all your service inquiries are answered.", "challenge"),
    ("The warranty coverage protects your electronic equipment against manufacturing defects and sudden hardware malfunctions for two years.", "challenge"),
    ("Please allow three to five business days for the credited refund amount to appear on bank statement.", "challenge"),
    ("Our senior technical specialist will call you back within thirty minutes to assist with broadband network troubleshooting.", "challenge"),
    ("We upgraded your shipping service to priority express delivery at no extra charge to prevent any delays.", "challenge"),
    ("Please confirm the verification code that was just sent to your secondary emergency contact mobile telephone number.", "challenge")
]

# Verify and format
output_items = []
for i, (text, diff) in enumerate(sentences_raw):
    words = text.split()
    wc = len(words)
    assert 6 <= wc <= 17, f"Sentence #{i+1} has {wc} words: '{text}'"
    output_items.append({
        "id": f"ls{i+1}",
        "text": text,
        "difficulty": diff,
        "wordCount": wc
    })

print(f"Total curated sentences: {len(output_items)}")
for diff in ["easy", "medium", "hard", "challenge"]:
    matching = [x for x in output_items if x["difficulty"] == diff]
    print(f"  {diff}: {len(matching)} sentences (word range {min(x['wordCount'] for x in matching)}-{max(x['wordCount'] for x in matching)})")

with open("scripts/curated_sentences.json", "w") as f:
    json.dump(output_items, f, indent=2)
print("Saved to scripts/curated_sentences.json successfully.")
